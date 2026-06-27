export function renderSourcesView(container, sources) {
  container.innerHTML = `
    <div class="animate-fade-in" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">News Sources Intelligence</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Active publishers and feed health metrics</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
        ${sources.map(src => `
          <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${src.name}</h3>
                <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; font-weight: 600; color: #10b981; background: rgba(16,185,129,0.1); padding: 0.25rem 0.6rem; border-radius: 12px;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span>
                  ${src.status || 'Active'}
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: var(--bg-main); border-radius: var(--radius-lg);">
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Articles</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${src.totalArticles || src.count || 0}</span>
                </div>
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Clusters</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--primary);">${src.totalClusters || Math.ceil((src.count || 5) / 3)}</span>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem;">
              <span>Last Ingestion</span>
              <span style="font-weight: 600; color: var(--text-main);">${src.lastUpdated || 'Recently'}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
