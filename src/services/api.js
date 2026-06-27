import { initialClusters, initialSources, topActiveTopics } from '../data/mockData.js';

const API_BASE = 'http://localhost:5001';

async function fetchWithFallback(url, fallbackData) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[API Link Warning] Failed to fetch ${url}, using fallback context.`, err.message);
    return fallbackData;
  }
}

export async function apiGetClusters() {
  return await fetchWithFallback(`${API_BASE}/clusters`, initialClusters);
}

export async function apiGetClusterById(id) {
  try {
    const res = await fetch(`${API_BASE}/clusters/${id}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn(`[API Link Warning] Failed to fetch cluster ${id}, using local search.`, e.message);
  }
  return initialClusters.find(c => c.id === id) || null;
}

export async function apiGetTimeline() {
  const fallback = initialClusters.map(c => ({
    id: c.id,
    label: c.name,
    start: c.timeRange.split('→')[0].trim(),
    end: c.timeRange.split('→')[1]?.trim() || c.timeRange,
    size: c.sizeIndicator,
    articleCount: c.articleCount,
    sources: c.sources
  }));
  return await fetchWithFallback(`${API_BASE}/timeline`, fallback);
}

export async function apiGetArticles() {
  const fallback = initialClusters.flatMap(c => c.articles.map(a => ({
    id: a.id,
    headline: a.title,
    title: a.title,
    summary: a.snippet,
    snippet: a.snippet,
    source: a.source,
    published: a.publishedTime,
    publishedAt: a.publishedTime,
    url: a.url,
    clusterName: c.name,
    status: 'Verified'
  })));
  return await fetchWithFallback(`${API_BASE}/articles`, fallback);
}

export async function apiGetSources() {
  return await fetchWithFallback(`${API_BASE}/sources`, initialSources);
}

export async function apiGetAnalytics() {
  const fallback = {
    articlesPerSource: initialSources.map(s => ({ source: s.name, count: s.count })),
    largestClusters: initialClusters.map(c => ({ id: c.id, label: c.name, articleCount: c.articleCount })),
    topTopics: topActiveTopics,
    totalArticles: 121,
    totalClusters: 6
  };
  return await fetchWithFallback(`${API_BASE}/analytics`, fallback);
}

export async function apiTriggerIngest() {
  try {
    const res = await fetch(`${API_BASE}/ingest/trigger`, { method: 'POST' });
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn(`[API Link Warning] Failed to trigger ingest on server.`, e.message);
  }
  return { jobId: 'job-simulated-' + Date.now() };
}

export async function apiGetIngestStatus(jobId) {
  try {
    const res = await fetch(`${API_BASE}/ingest/status/${jobId}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn(`[API Link Warning] Failed to get status for ${jobId}.`, e.message);
  }
  return { status: 'completed', jobId };
}
