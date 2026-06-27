export function renderHeader(container, onSearch, onRefresh) {
  container.innerHTML = `
    <div class="search-container">
      <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" class="search-input" id="search-input" placeholder="Search topic clusters, keywords, or sources...">
    </div>

    <div class="header-actions">
      <button id="refresh-btn" class="btn-refresh">
        <svg id="refresh-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
        <span>Refresh Data</span>
      </button>
    </div>
  `;

  const searchInput = container.querySelector('#search-input');
  searchInput.addEventListener('input', (e) => {
    onSearch(e.target.value.trim());
  });

  const refreshBtn = container.querySelector('#refresh-btn');
  refreshBtn.addEventListener('click', () => {
    onRefresh();
  });
}
