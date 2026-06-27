export function renderDrawer(drawerEl, overlayEl, cluster, onClose) {
  if (!cluster) {
    drawerEl.classList.remove('open');
    overlayEl.classList.remove('open');
    drawerEl.setAttribute('aria-hidden', 'true');
    return;
  }

  // Sort articles chronologically (latest to earliest)
  const sortedArticles = [...(cluster.articles || [])].sort((a, b) => (b.timestampRaw || 0) - (a.timestampRaw || 0));

  drawerEl.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-title-area">
        <h2 class="drawer-title">${cluster.name || cluster.label}</h2>
        <div class="drawer-subtitle">
          <span class="articles-badge">${cluster.articleCount || sortedArticles.length} articles</span>
          <span>•</span>
          <span>${cluster.timeRange || ''}</span>
        </div>
      </div>
      <button id="close-drawer-btn" class="btn-close-drawer" aria-label="Close drawer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="drawer-body">
      <div>
        <div class="drawer-section-title">Cluster Synopsis</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; background: var(--bg-main); padding: 1rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color-subtle);">
          ${cluster.summary}
        </p>
      </div>

      <div>
        <div class="drawer-section-title" style="display: flex; align-items: center; justify-content: space-between;">
          <span>Chronological Timeline & Articles</span>
          <span style="font-size: 0.75rem; color: var(--primary); text-transform: none; font-weight: 600;">Latest First</span>
        </div>
        
        <div class="timeline-container">
          ${sortedArticles.map(art => {
            const img = art.imageUrl || art.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80';
            return `
              <div class="timeline-article-card" style="overflow: hidden; padding: 0;">
                ${img ? `
                  <div style="width: 100%; height: 140px; overflow: hidden; background: #e2e8f0; position: relative;">
                    <img src="${img}" alt="${art.title || art.headline}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='none'">
                  </div>
                ` : ''}
                <div style="padding: 1.25rem;">
                  <div class="article-card-header" style="margin-bottom: 0.5rem;">
                    <span class="source-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: var(--primary-border);">${art.source}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${art.publishedTime || art.publishedAt || art.published}</span>
                  </div>
                  <h4 class="article-card-title" style="margin-bottom: 0.5rem; font-size: 1rem; line-height: 1.35;">${art.title || art.headline}</h4>
                  <p class="article-snippet" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1rem;">${art.snippet || art.summary}</p>
                  <div class="article-card-footer">
                    <span style="font-size: 0.75rem; color: var(--text-light);">Verified Intelligence Link</span>
                    <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" onclick="event.stopPropagation();">
                      <span>Read Source</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  drawerEl.classList.add('open');
  overlayEl.classList.add('open');
  drawerEl.setAttribute('aria-hidden', 'false');

  // Close handlers
  const closeBtn = drawerEl.querySelector('#close-drawer-btn');
  closeBtn.addEventListener('click', () => onClose());
  
  overlayEl.onclick = () => onClose();
}
