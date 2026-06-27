export function renderArticlesView(container, articles) {
  let currentSearch = '';
  let sortAsc = false;

  function renderTable() {
    const filtered = articles.filter(a => {
      const q = currentSearch.toLowerCase();
      const headline = a.headline || a.title || '';
      const cluster = a.clusterName || a.clusterLabel || '';
      const source = a.source || '';
      return (
        headline.toLowerCase().includes(q) ||
        cluster.toLowerCase().includes(q) ||
        source.toLowerCase().includes(q)
      );
    });

    filtered.sort((a, b) => {
      const timeA = new Date(a.publishedAt || a.published).getTime() || 0;
      const timeB = new Date(b.publishedAt || b.published).getTime() || 0;
      return sortAsc ? timeA - timeB : timeB - timeA;
    });

    container.innerHTML = `
      <div class="animate-fade-in" style="background: var(--bg-surface); padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Articles Repository</h2>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Comprehensive feed of all ingested news intelligence articles</p>
          </div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <input type="text" id="articles-search-input" placeholder="Filter table articles..." value="${currentSearch}" style="padding: 0.5rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.875rem; min-width: 240px; background: var(--bg-main);">
            <button id="sort-toggle-btn" class="btn-refresh" style="font-size: 0.8rem; padding: 0.5rem 0.875rem;">
              <span>Sort: ${sortAsc ? 'Oldest First' : 'Newest First'}</span>
            </button>
          </div>
        </div>

        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.875rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">
                <th style="padding: 0.875rem 1rem; width: 45%;">Headline & Preview</th>
                <th style="padding: 0.875rem 1rem; width: 23%;">Cluster</th>
                <th style="padding: 0.875rem 1rem; width: 11%;">Source</th>
                <th style="padding: 0.875rem 1rem; width: 11%;">Published</th>
                <th style="padding: 0.875rem 1rem; width: 10%;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr><td colspan="5" style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No articles match your search criteria.</td></tr>
              ` : filtered.map(art => {
                const img = art.imageUrl || art.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80';
                return `
                  <tr style="border-bottom: 1px solid var(--border-color-subtle); transition: background 0.15s ease;" onmouseenter="this.style.background='var(--bg-main)'" onmouseleave="this.style.background='transparent'">
                    <td style="padding: 1rem;">
                      <div style="display: flex; gap: 0.875rem; align-items: center;">
                        <img src="${img}" alt="Article thumbnail" style="width: 54px; height: 40px; border-radius: 6px; object-fit: cover; background: #e2e8f0; flex-shrink: 0;">
                        <div>
                          <a href="${art.url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none; font-weight: 600; display: block; line-height: 1.3;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-main)'">
                            ${art.headline || art.title}
                          </a>
                          <span style="font-size: 0.78rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-top: 2px;">
                            ${art.snippet || art.summary}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">
                      <span style="display: inline-block; background: rgba(37, 99, 235, 0.08); color: var(--primary); padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 500;">
                        ${art.clusterName || art.clusterLabel || 'Topic Cluster'}
                      </span>
                    </td>
                    <td style="padding: 1rem;"><span class="source-badge">${art.source}</span></td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem; white-space: nowrap;">${art.publishedAt || art.published}</td>
                    <td style="padding: 1rem;">
                      <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                        <span>Open</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const searchInput = container.querySelector('#articles-search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.setSelectionRange(currentSearch.length, currentSearch.length);
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderTable();
      });
    }

    const sortBtn = container.querySelector('#sort-toggle-btn');
    if (sortBtn) {
      sortBtn.addEventListener('click', () => {
        sortAsc = !sortAsc;
        renderTable();
      });
    }
  }

  renderTable();
}
