export function renderAnalyticsView(container, analyticsData) {
  if (!analyticsData) {
    container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Loading analytics metrics...</div>`;
    return;
  }

  const { articlesPerSource = [], largestClusters = [], topTopics = [] } = analyticsData;

  const maxSourceCount = Math.max(...articlesPerSource.map(s => s.count), 1);
  const maxClusterCount = Math.max(...largestClusters.map(c => c.articleCount), 1);

  container.innerHTML = `
    <div class="animate-fade-in" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Topic Cluster Analytics</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Quantitative distribution and real-time intelligence metrics</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <!-- Articles Per Source Chart -->
        <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <span>Articles Per Source</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          </h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${articlesPerSource.map(s => `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main);">${s.source}</span>
                  <span style="color: var(--text-muted); font-weight: 600;">${s.count} articles</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round((s.count / maxSourceCount) * 100)}%; height: 100%; background: linear-gradient(90deg, #2563eb, #3b82f6); border-radius: 8px; transition: width 0.8s ease;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Largest Clusters Distribution -->
        <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <span>Largest Topic Clusters</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #10b981;"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
          </h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${largestClusters.map(c => `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px;">${c.label || c.name}</span>
                  <span style="color: #10b981; font-weight: 600;">${c.articleCount} arts</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round((c.articleCount / maxClusterCount) * 100)}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 8px; transition: width 0.8s ease;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Top Active Topics & Activity -->
      <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem;">Top Active Topics Breakdown</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
          ${topTopics.map((t, i) => `
            <div style="background: var(--bg-main); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color-subtle);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); background: rgba(37,99,235,0.1); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">#${i+1}</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">${t.count} articles</span>
              </div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">${t.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${t.percentage || Math.round((t.count / 30) * 100)}% of total volume</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
