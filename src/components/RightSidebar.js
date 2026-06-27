export function renderRightSidebar(container, clusters, topTopics, onClusterClick) {
  const recentClusters = [...clusters].slice(0, 4);

  container.innerHTML = `
    <!-- Recent Clusters Widget -->
    <div class="widget-card animate-fade-in">
      <div class="widget-title">
        <span>Recent Clusters</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-light);"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div class="widget-list">
        ${recentClusters.map(c => `
          <div class="recent-item" data-cluster-id="${c.id}">
            <div class="recent-item-title">${c.name}</div>
            <div class="recent-item-meta">
              <span>${c.articleCount} articles</span>
              <span>•</span>
              <span>${c.createdTimestamp}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Top Active Topics Widget -->
    <div class="widget-card animate-fade-in">
      <div class="widget-title">
        <span>Top Active Topics</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-light);"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      </div>
      <div class="widget-list">
        ${topTopics.map((t, index) => `
          <div class="topic-rank-item">
            <div class="rank-number">${index + 1}</div>
            <div class="topic-rank-info">
              <div class="topic-rank-title-row">
                <span class="topic-rank-name">${t.name}</span>
                <span class="topic-rank-count">${t.count} articles</span>
              </div>
              <div class="rank-bar-bg">
                <div class="rank-bar-fill" style="width: ${t.percentage}%;"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach click listeners to recent items
  const recentItems = container.querySelectorAll('.recent-item');
  recentItems.forEach(item => {
    item.addEventListener('click', () => {
      const clusterId = item.dataset.clusterId;
      const found = clusters.find(c => c.id === clusterId);
      if (found) {
        onClusterClick(found);
      }
    });
  });
}
