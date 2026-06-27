export function renderSidebar(container, sources, activeTab = 'dashboard', onSourceToggle, onNavigate) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>' },
    { id: 'timeline', label: 'Timeline', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
    { id: 'clusters', label: 'Clusters', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
    { id: 'articles', label: 'Articles', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
    { id: 'sources', label: 'Sources', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11a9 9 0 0 1 9-9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>' },
    { id: 'analytics', label: 'Analytics', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
    { id: 'settings', label: 'Settings', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' }
  ];

  container.innerHTML = `
    <div class="brand">
      <div class="brand-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div>
        <div class="brand-title">NewsPulse</div>
      </div>
      <span class="brand-tag">v2.4</span>
    </div>

    <nav class="nav-section">
      ${navItems.map(item => `
        <a href="#" class="nav-item ${item.id === activeTab ? 'active' : ''}" data-id="${item.id}">
          ${item.icon}
          <span>${item.label}</span>
        </a>
      `).join('')}
    </nav>

    <div class="filter-section">
      <div class="filter-title">News Source Filter</div>
      <div class="filter-list">
        ${sources.map(src => `
          <label class="filter-checkbox-label" for="src-${src.id}">
            <input type="checkbox" id="src-${src.id}" class="filter-checkbox" data-source-name="${src.name}" ${src.checked ? 'checked' : ''}>
            <span>${src.name}</span>
            <span class="source-count">${src.count || src.totalArticles || 0}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;

  // Attach event listeners for checkboxes
  const checkboxes = container.querySelectorAll('.filter-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', (e) => {
      onSourceToggle(e.target.dataset.sourceName, e.target.checked);
    });
  });

  // Attach nav item click navigation switching
  const navLinks = container.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.id;
      navLinks.forEach(n => n.classList.remove('active'));
      link.classList.add('active');
      if (onNavigate) onNavigate(tabId);
    });
  });
}
