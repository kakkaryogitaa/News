export function renderOverviewCard(container, stats) {
  container.innerHTML = `
    <div class="overview-card-container animate-fade-in">
      <div class="overview-header">
        <div class="overview-title-group">
          <h2 class="overview-title">Topic Timeline Overview</h2>
          <span class="live-badge">
            <span class="live-dot"></span>
            Live Monitoring
          </span>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-box">
          <span class="stat-label">Total Clusters</span>
          <span class="stat-value" id="stat-total-clusters">${stats.totalClusters}</span>
          <span class="stat-subtext">Active topics tracked</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Total Articles</span>
          <span class="stat-value" id="stat-total-articles">${stats.totalArticles}</span>
          <span class="stat-subtext">Across all outlets</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Active Sources</span>
          <span class="stat-value" id="stat-active-sources">${stats.activeSources}</span>
          <span class="stat-subtext">Verified publishers</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Last Updated</span>
          <span class="stat-value" id="stat-last-updated" style="font-size: 1.25rem; line-height: 2rem;">${stats.lastUpdated}</span>
          <span class="stat-subtext">Automated ingestion</span>
        </div>
      </div>
    </div>
  `;
}
