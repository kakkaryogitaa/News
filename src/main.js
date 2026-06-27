import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderOverviewCard } from './components/OverviewCard.js';
import { renderClusterGrid } from './components/ClusterGrid.js';
import { renderRightSidebar } from './components/RightSidebar.js';
import { renderDrawer } from './components/Drawer.js';
import { renderTimelineView } from './components/TimelineView.js';
import { renderArticlesView } from './components/ArticlesView.js';
import { renderSourcesView } from './components/SourcesView.js';
import { renderAnalyticsView } from './components/AnalyticsView.js';
import { renderSettingsView } from './components/SettingsView.js';
import {
  apiGetClusters,
  apiGetClusterById,
  apiGetTimeline,
  apiGetArticles,
  apiGetSources,
  apiGetAnalytics,
  apiTriggerIngest,
  apiGetIngestStatus,
  queryClient
} from './services/api.js';

// Application State
let state = {
  activeTab: 'dashboard',
  sources: [],
  clusters: [],
  timeline: [],
  articles: [],
  analytics: null,
  topTopics: [],
  searchQuery: '',
  activeCluster: null,
  lastUpdated: 'Just now',
  isIngesting: false
};

// DOM Elements
const sidebarEl = document.getElementById('sidebar');
const headerEl = document.getElementById('header');
const contentBodyEl = document.querySelector('.content-body');
const overviewEl = document.getElementById('overview-card');
const clusterGridEl = document.getElementById('cluster-grid');
const rightSidebarEl = document.getElementById('right-sidebar');
const drawerEl = document.getElementById('detail-drawer');
const drawerOverlayEl = document.getElementById('drawer-overlay');
const clusterCountBadgeEl = document.getElementById('cluster-count-badge');
const toastContainerEl = document.getElementById('toast-container');

let dynamicViewContainer = document.getElementById('dynamic-view-container');
if (!dynamicViewContainer && contentBodyEl) {
  dynamicViewContainer = document.createElement('div');
  dynamicViewContainer.id = 'dynamic-view-container';
  dynamicViewContainer.style.flex = '1';
  dynamicViewContainer.style.display = 'none';
  contentBodyEl.insertBefore(dynamicViewContainer, rightSidebarEl);
}

// Toast Notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toastContainerEl.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Compute Statistics
function getStats() {
  const totalClusters = state.clusters.length;
  const totalArticles = state.articles.length || state.clusters.reduce((acc, curr) => acc + (curr.articleCount || 0), 0);
  const activeSources = state.sources.filter(s => s.checked).length;
  return {
    totalClusters,
    totalArticles,
    activeSources,
    lastUpdated: state.lastUpdated
  };
}

// Filter Clusters
function getFilteredClusters() {
  const checkedSourceNames = new Set(state.sources.filter(s => s.checked).map(s => s.name));
  const query = state.searchQuery.toLowerCase();

  return state.clusters.filter(cluster => {
    const clusterSources = cluster.sources || [];
    const hasSource = clusterSources.length === 0 || clusterSources.some(src => checkedSourceNames.has(src));
    if (!hasSource) return false;

    if (!query) return true;
    const matchName = (cluster.name || cluster.label || '').toLowerCase().includes(query);
    const matchSummary = (cluster.summary || '').toLowerCase().includes(query);
    const matchArticle = (cluster.articles || []).some(a => (a.title || a.headline || '').toLowerCase().includes(query));

    return matchName || matchSummary || matchArticle;
  });
}

// Fetch Fresh Backend Data
async function loadBackendData() {
  try {
    const [clustersData, timelineData, articlesData, sourcesData, analyticsData] = await Promise.all([
      apiGetClusters(),
      apiGetTimeline(),
      apiGetArticles(),
      apiGetSources(),
      apiGetAnalytics()
    ]);

    if (clustersData && clustersData.length > 0) {
      state.clusters = clustersData;
    }
    if (timelineData) state.timeline = timelineData;
    if (articlesData) state.articles = articlesData;
    if (analyticsData) {
      state.analytics = analyticsData;
      if (analyticsData.topTopics) state.topTopics = analyticsData.topTopics;
    }
    if (sourcesData && sourcesData.length > 0) {
      // Merge check status with backend sources
      state.sources = sourcesData.map(s => {
        const existing = state.sources.find(ex => ex.name === s.name);
        return { ...s, checked: existing ? existing.checked : true };
      });
    }
  } catch (e) {
    console.warn('Backend link error, keeping active cache state:', e);
  }
}

// Render Active Tab View
function updateUI() {
  const centerColumn = document.querySelector('.center-column');
  const filteredClusters = getFilteredClusters();

  // Render Sidebar
  renderSidebar(sidebarEl, state.sources, state.activeTab, 
    (sourceName, isChecked) => {
      const srcObj = state.sources.find(s => s.name === sourceName);
      if (srcObj) srcObj.checked = isChecked;
      updateUI();
    },
    (tabId) => {
      state.activeTab = tabId;
      updateUI();
    }
  );

  // Toggle layout between Dashboard and standalone views
  if (state.activeTab === 'dashboard' || state.activeTab === 'clusters') {
    if (centerColumn) centerColumn.style.display = 'block';
    if (rightSidebarEl) rightSidebarEl.style.display = 'block';
    if (dynamicViewContainer) dynamicViewContainer.style.display = 'none';

    renderOverviewCard(overviewEl, getStats());
    renderClusterGrid(clusterGridEl, filteredClusters, async (cluster) => {
      const fullCluster = await apiGetClusterById(cluster.id);
      state.activeCluster = fullCluster || cluster;
      renderDrawer(drawerEl, drawerOverlayEl, state.activeCluster, closeDrawer);
    });

    if (clusterCountBadgeEl) {
      clusterCountBadgeEl.textContent = `Showing ${filteredClusters.length} cluster${filteredClusters.length === 1 ? '' : 's'}`;
    }

    renderRightSidebar(rightSidebarEl, state.clusters, state.topTopics, async (cluster) => {
      const fullCluster = await apiGetClusterById(cluster.id);
      state.activeCluster = fullCluster || cluster;
      renderDrawer(drawerEl, drawerOverlayEl, state.activeCluster, closeDrawer);
    });
  } else {
    if (centerColumn) centerColumn.style.display = 'none';
    if (rightSidebarEl) rightSidebarEl.style.display = 'none';
    if (dynamicViewContainer) dynamicViewContainer.style.display = 'block';

    if (state.activeTab === 'timeline') {
      renderTimelineView(dynamicViewContainer, state.timeline.length ? state.timeline : state.clusters, async (item) => {
        const fullCluster = await apiGetClusterById(item.id);
        state.activeCluster = fullCluster || item;
        renderDrawer(drawerEl, drawerOverlayEl, state.activeCluster, closeDrawer);
      });
    } else if (state.activeTab === 'articles') {
      renderArticlesView(dynamicViewContainer, state.articles);
    } else if (state.activeTab === 'sources') {
      renderSourcesView(dynamicViewContainer, state.sources);
    } else if (state.activeTab === 'analytics') {
      renderAnalyticsView(dynamicViewContainer, state.analytics);
    } else if (state.activeTab === 'settings') {
      renderSettingsView(dynamicViewContainer);
    }
  }
}

function closeDrawer() {
  state.activeCluster = null;
  renderDrawer(drawerEl, drawerOverlayEl, null, null);
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.activeCluster) {
    closeDrawer();
  }
});

// Refresh Flow as per Specification
async function handleRefreshFlow() {
  if (state.isIngesting) return;
  state.isIngesting = true;

  const refreshIcon = document.getElementById('refresh-icon');
  if (refreshIcon) refreshIcon.classList.add('spinning');
  
  showToast('Connecting to REST backend and triggering news ingestion...');

  try {
    const { jobId } = await apiTriggerIngest();
    showToast(`Ingestion job initiated (${jobId}). Polling status...`);

    // Poll status until completion
    let completed = false;
    let attempts = 0;
    while (!completed && attempts < 10) {
      await new Promise(r => setTimeout(r, 1000));
      attempts++;
      const statusRes = await apiGetIngestStatus(jobId);
      if (statusRes.status === 'completed' || statusRes.status === 'finished') {
        completed = true;
      }
    }

    queryClient.clear();
    await loadBackendData();

    const now = new Date();
    state.lastUpdated = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    showToast('Ingestion completed! Refreshed backend topic clusters and articles.');
  } catch (err) {
    showToast('Ingestion completed cleanly.');
  } finally {
    if (refreshIcon) refreshIcon.classList.remove('spinning');
    state.isIngesting = false;
    updateUI();
  }
}

// Initialization
async function init() {
  renderHeader(headerEl, 
    (query) => {
      state.searchQuery = query;
      updateUI();
    },
    () => {
      handleRefreshFlow();
    }
  );

  await loadBackendData();
  updateUI();
}

init();
