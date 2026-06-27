export function renderClusterGrid(container, clusters, onClusterClick) {
  if (clusters.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; background: var(--bg-surface); padding: 3rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid var(--border-color); color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; color: var(--text-light);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">No Topic Clusters Found</h3>
        <p style="font-size: 0.875rem;">Try adjusting your news source filters or search query.</p>
      </div>
    `;
    return;
  }

  const indicatorColors = {
    high: 'var(--indicator-high)',
    medium: 'var(--indicator-medium)',
    low: 'var(--indicator-low)'
  };

  const defaultClusterImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
  ];

  container.innerHTML = clusters.map((cluster, index) => {
    const topArticleImg = cluster.articles && cluster.articles.length > 0 ? (cluster.articles[0].imageUrl || cluster.articles[0].image_url) : null;
    const bannerImg = topArticleImg || defaultClusterImages[index % defaultClusterImages.length];

    return `
      <div class="cluster-card animate-fade-in" data-cluster-id="${cluster.id}" style="overflow: hidden; padding: 0; display: flex; flex-direction: column;">
        <div style="width: 100%; height: 150px; overflow: hidden; background: #e2e8f0; position: relative; flex-shrink: 0;">
          <img src="${bannerImg}" alt="${cluster.name || cluster.label}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='none'">
          <span class="articles-badge" style="position: absolute; top: 12px; right: 12px; backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.75); color: #fff; border: none; padding: 0.25rem 0.65rem; font-weight: 600;">
            ${cluster.articleCount} articles
          </span>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
          <div>
            <div class="cluster-top-bar" style="margin-bottom: 0.5rem; align-items: flex-start;">
              <div class="cluster-title-wrap">
                <span class="cluster-indicator" style="background-color: ${indicatorColors[cluster.sizeIndicator] || 'var(--primary)'}; margin-top: 5px;"></span>
                <h3 class="cluster-name" style="font-size: 1rem; line-height: 1.35;">${cluster.name || cluster.label}</h3>
              </div>
            </div>
            <p class="cluster-summary" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1.25rem; -webkit-line-clamp: 2;">${cluster.summary}</p>
          </div>

          <div class="cluster-meta" style="border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem; margin-top: 0;">
            <div class="cluster-time-range" style="font-size: 0.75rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>${cluster.timeRange}</span>
            </div>
            
            <div class="cluster-sources-row">
              ${(cluster.sources || []).map(src => `<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${src}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners
  const cards = container.querySelectorAll('.cluster-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const clusterId = card.dataset.clusterId;
      const selectedCluster = clusters.find(c => c.id === clusterId);
      if (selectedCluster) {
        onClusterClick(selectedCluster);
      }
    });
  });
}
