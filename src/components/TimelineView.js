export function renderTimelineView(container, timelineData, onClusterClick) {
  if (!timelineData || timelineData.length === 0) {
    container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No timeline data available.</div>`;
    return;
  }

  const indicatorColors = {
    high: 'var(--indicator-high)',
    medium: 'var(--indicator-medium)',
    low: 'var(--indicator-low)'
  };

  container.innerHTML = `
    <div class="animate-fade-in" style="background: var(--bg-surface); padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
        <div>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Interactive Topic Timeline</h2>
          <p style="font-size: 0.875rem; color: var(--text-muted);">Chronological spread and activity intensity across topic clusters</p>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center; font-size: 0.75rem; color: var(--text-muted);">
          <span style="display: flex; align-items: center; gap: 0.35rem;"><span style="width: 10px; height: 10px; border-radius: 50%; background: var(--indicator-high);"></span> High Activity</span>
          <span style="display: flex; align-items: center; gap: 0.35rem;"><span style="width: 10px; height: 10px; border-radius: 50%; background: var(--indicator-medium);"></span> Medium</span>
          <span style="display: flex; align-items: center; gap: 0.35rem;"><span style="width: 10px; height: 10px; border-radius: 50%; background: var(--indicator-low);"></span> Low</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${timelineData.map(item => {
          const size = item.size || item.sizeIndicator || 'medium';
          const color = indicatorColors[size] || 'var(--primary)';
          const barHeight = size === 'high' ? '24px' : size === 'medium' ? '18px' : '14px';
          const count = item.articleCount || 0;
          
          return `
            <div class="timeline-bar-row" data-cluster-id="${item.id}" style="cursor: pointer; padding: 0.875rem; border-radius: var(--radius-md); background: var(--bg-main); border: 1px solid var(--border-color-subtle); transition: all 0.2s ease;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                <span style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${item.label || item.name}</span>
                <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 500;">${item.start || ''} → ${item.end || ''}</span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="flex: 1; background: rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; height: ${barHeight}; position: relative;">
                  <div style="width: ${Math.min(100, count * 3.5 + 20)}%; height: 100%; background: ${color}; border-radius: 12px; transition: width 0.6s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; color: #fff; font-size: 0.7rem; font-weight: 700;">
                    ${count > 15 ? count + ' articles' : ''}
                  </div>
                </div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); min-width: 75px; text-align: right;">${count} articles</span>
              </div>

              <div style="display: flex; gap: 0.4rem; margin-top: 0.6rem;">
                ${(item.sources || []).map(s => `<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${s}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  const rows = container.querySelectorAll('.timeline-bar-row');
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.clusterId;
      const found = timelineData.find(t => t.id === id);
      if (found) onClusterClick(found);
    });
    row.addEventListener('mouseenter', () => {
      row.style.borderColor = 'var(--primary)';
      row.style.transform = 'translateX(4px)';
    });
    row.addEventListener('mouseleave', () => {
      row.style.borderColor = 'var(--border-color-subtle)';
      row.style.transform = 'none';
    });
  });
}
