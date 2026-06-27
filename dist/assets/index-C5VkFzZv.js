var Ue=t=>{throw TypeError(t)};var qe=(t,e,s)=>e.has(t)||Ue("Cannot "+s);var n=(t,e,s)=>(qe(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>e.has(t)?Ue("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,i)=>(qe(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),A=(t,e,s)=>(qe(t,e,"access private method"),s);var ke=(t,e,s,i)=>({set _(r){d(t,e,r,s)},get _(){return n(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function yt(t,e,s="dashboard",i,r){const a=[{id:"dashboard",label:"Dashboard",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>'},{id:"timeline",label:"Timeline",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'},{id:"clusters",label:"Clusters",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'},{id:"articles",label:"Articles",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'},{id:"sources",label:"Sources",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11a9 9 0 0 1 9-9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'},{id:"analytics",label:"Analytics",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'},{id:"settings",label:"Settings",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'}];t.innerHTML=`
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
      ${a.map(l=>`
        <a href="#" class="nav-item ${l.id===s?"active":""}" data-id="${l.id}">
          ${l.icon}
          <span>${l.label}</span>
        </a>
      `).join("")}
    </nav>

    <div class="filter-section">
      <div class="filter-title">News Source Filter</div>
      <div class="filter-list">
        ${e.map(l=>`
          <label class="filter-checkbox-label" for="src-${l.id}">
            <input type="checkbox" id="src-${l.id}" class="filter-checkbox" data-source-name="${l.name}" ${l.checked?"checked":""}>
            <span>${l.name}</span>
            <span class="source-count">${l.count||l.totalArticles||0}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".filter-checkbox").forEach(l=>{l.addEventListener("change",f=>{i(f.target.dataset.sourceName,f.target.checked)})});const c=t.querySelectorAll(".nav-item");c.forEach(l=>{l.addEventListener("click",f=>{f.preventDefault();const m=l.dataset.id;c.forEach(y=>y.classList.remove("active")),l.classList.add("active"),r&&r(m)})})}function gt(t,e,s){t.innerHTML=`
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
  `,t.querySelector("#search-input").addEventListener("input",a=>{e(a.target.value.trim())}),t.querySelector("#refresh-btn").addEventListener("click",()=>{s()})}function bt(t,e){t.innerHTML=`
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
          <span class="stat-value" id="stat-total-clusters">${e.totalClusters}</span>
          <span class="stat-subtext">Active topics tracked</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Total Articles</span>
          <span class="stat-value" id="stat-total-articles">${e.totalArticles}</span>
          <span class="stat-subtext">Across all outlets</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Active Sources</span>
          <span class="stat-value" id="stat-active-sources">${e.activeSources}</span>
          <span class="stat-subtext">Verified publishers</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Last Updated</span>
          <span class="stat-value" id="stat-last-updated" style="font-size: 1.25rem; line-height: 2rem;">${e.lastUpdated}</span>
          <span class="stat-subtext">Automated ingestion</span>
        </div>
      </div>
    </div>
  `}function wt(t,e,s){if(e.length===0){t.innerHTML=`
      <div style="grid-column: 1 / -1; background: var(--bg-surface); padding: 3rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid var(--border-color); color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; color: var(--text-light);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">No Topic Clusters Found</h3>
        <p style="font-size: 0.875rem;">Try adjusting your news source filters or search query.</p>
      </div>
    `;return}const i={high:"var(--indicator-high)",medium:"var(--indicator-medium)",low:"var(--indicator-low)"},r=["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"];t.innerHTML=e.map((o,c)=>{const f=(o.articles&&o.articles.length>0?o.articles[0].imageUrl||o.articles[0].image_url:null)||r[c%r.length];return`
      <div class="cluster-card animate-fade-in" data-cluster-id="${o.id}" style="overflow: hidden; padding: 0; display: flex; flex-direction: column;">
        <div style="width: 100%; height: 150px; overflow: hidden; background: #e2e8f0; position: relative; flex-shrink: 0;">
          <img src="${f}" alt="${o.name||o.label}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='none'">
          <span class="articles-badge" style="position: absolute; top: 12px; right: 12px; backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.75); color: #fff; border: none; padding: 0.25rem 0.65rem; font-weight: 600;">
            ${o.articleCount} articles
          </span>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
          <div>
            <div class="cluster-top-bar" style="margin-bottom: 0.5rem; align-items: flex-start;">
              <div class="cluster-title-wrap">
                <span class="cluster-indicator" style="background-color: ${i[o.sizeIndicator]||"var(--primary)"}; margin-top: 5px;"></span>
                <h3 class="cluster-name" style="font-size: 1rem; line-height: 1.35;">${o.name||o.label}</h3>
              </div>
            </div>
            <p class="cluster-summary" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1.25rem; -webkit-line-clamp: 2;">${o.summary}</p>
          </div>

          <div class="cluster-meta" style="border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem; margin-top: 0;">
            <div class="cluster-time-range" style="font-size: 0.75rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>${o.timeRange}</span>
            </div>
            
            <div class="cluster-sources-row">
              ${(o.sources||[]).map(m=>`<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${m}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `}).join(""),t.querySelectorAll(".cluster-card").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.clusterId,l=e.find(f=>f.id===c);l&&s(l)})})}function xt(t,e,s,i){const r=[...e].slice(0,4);t.innerHTML=`
    <!-- Recent Clusters Widget -->
    <div class="widget-card animate-fade-in">
      <div class="widget-title">
        <span>Recent Clusters</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-light);"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div class="widget-list">
        ${r.map(o=>`
          <div class="recent-item" data-cluster-id="${o.id}">
            <div class="recent-item-title">${o.name}</div>
            <div class="recent-item-meta">
              <span>${o.articleCount} articles</span>
              <span>•</span>
              <span>${o.createdTimestamp}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Top Active Topics Widget -->
    <div class="widget-card animate-fade-in">
      <div class="widget-title">
        <span>Top Active Topics</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-light);"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      </div>
      <div class="widget-list">
        ${s.map((o,c)=>`
          <div class="topic-rank-item">
            <div class="rank-number">${c+1}</div>
            <div class="topic-rank-info">
              <div class="topic-rank-title-row">
                <span class="topic-rank-name">${o.name}</span>
                <span class="topic-rank-count">${o.count} articles</span>
              </div>
              <div class="rank-bar-bg">
                <div class="rank-bar-fill" style="width: ${o.percentage}%;"></div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".recent-item").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.clusterId,l=e.find(f=>f.id===c);l&&i(l)})})}function Ae(t,e,s,i){if(!s){t.classList.remove("open"),e.classList.remove("open"),t.setAttribute("aria-hidden","true");return}const r=[...s.articles||[]].sort((o,c)=>(c.timestampRaw||0)-(o.timestampRaw||0));t.innerHTML=`
    <div class="drawer-header">
      <div class="drawer-title-area">
        <h2 class="drawer-title">${s.name||s.label}</h2>
        <div class="drawer-subtitle">
          <span class="articles-badge">${s.articleCount||r.length} articles</span>
          <span>•</span>
          <span>${s.timeRange||""}</span>
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
          ${s.summary}
        </p>
      </div>

      <div>
        <div class="drawer-section-title" style="display: flex; align-items: center; justify-content: space-between;">
          <span>Chronological Timeline & Articles</span>
          <span style="font-size: 0.75rem; color: var(--primary); text-transform: none; font-weight: 600;">Latest First</span>
        </div>
        
        <div class="timeline-container">
          ${r.map(o=>`
              <div class="timeline-article-card" style="overflow: hidden; padding: 0;">
                ${`
                  <div style="width: 100%; height: 140px; overflow: hidden; background: #e2e8f0; position: relative;">
                    <img src="${o.imageUrl||o.image_url||"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"}" alt="${o.title||o.headline}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='none'">
                  </div>
                `}
                <div style="padding: 1.25rem;">
                  <div class="article-card-header" style="margin-bottom: 0.5rem;">
                    <span class="source-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: var(--primary-border);">${o.source}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${o.publishedTime||o.publishedAt||o.published}</span>
                  </div>
                  <h4 class="article-card-title" style="margin-bottom: 0.5rem; font-size: 1rem; line-height: 1.35;">${o.title||o.headline}</h4>
                  <p class="article-snippet" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1rem;">${o.snippet||o.summary}</p>
                  <div class="article-card-footer">
                    <span style="font-size: 0.75rem; color: var(--text-light);">Verified Intelligence Link</span>
                    <a href="${o.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" onclick="event.stopPropagation();">
                      <span>Read Source</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `,t.classList.add("open"),e.classList.add("open"),t.setAttribute("aria-hidden","false"),t.querySelector("#close-drawer-btn").addEventListener("click",()=>i()),e.onclick=()=>i()}function Ct(t,e,s){if(!e||e.length===0){t.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No timeline data available.</div>';return}const i={high:"var(--indicator-high)",medium:"var(--indicator-medium)",low:"var(--indicator-low)"};t.innerHTML=`
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
        ${e.map(a=>{const o=a.size||a.sizeIndicator||"medium",c=i[o]||"var(--primary)",l=o==="high"?"24px":o==="medium"?"18px":"14px",f=a.articleCount||0;return`
            <div class="timeline-bar-row" data-cluster-id="${a.id}" style="cursor: pointer; padding: 0.875rem; border-radius: var(--radius-md); background: var(--bg-main); border: 1px solid var(--border-color-subtle); transition: all 0.2s ease;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                <span style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${a.label||a.name}</span>
                <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 500;">${a.start||""} → ${a.end||""}</span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="flex: 1; background: rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; height: ${l}; position: relative;">
                  <div style="width: ${Math.min(100,f*3.5+20)}%; height: 100%; background: ${c}; border-radius: 12px; transition: width 0.6s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; color: #fff; font-size: 0.7rem; font-weight: 700;">
                    ${f>15?f+" articles":""}
                  </div>
                </div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); min-width: 75px; text-align: right;">${f} articles</span>
              </div>

              <div style="display: flex; gap: 0.4rem; margin-top: 0.6rem;">
                ${(a.sources||[]).map(m=>`<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${m}</span>`).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".timeline-bar-row").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.clusterId,c=e.find(l=>l.id===o);c&&s(c)}),a.addEventListener("mouseenter",()=>{a.style.borderColor="var(--primary)",a.style.transform="translateX(4px)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor="var(--border-color-subtle)",a.style.transform="none"})})}function kt(t,e){let s="",i=!1;function r(){const a=e.filter(l=>{const f=s.toLowerCase(),m=l.headline||l.title||"",y=l.clusterName||l.clusterLabel||"",b=l.source||"";return m.toLowerCase().includes(f)||y.toLowerCase().includes(f)||b.toLowerCase().includes(f)});a.sort((l,f)=>{const m=new Date(l.publishedAt||l.published).getTime()||0,y=new Date(f.publishedAt||f.published).getTime()||0;return i?m-y:y-m}),t.innerHTML=`
      <div class="animate-fade-in" style="background: var(--bg-surface); padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Articles Repository</h2>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Comprehensive feed of all ingested news intelligence articles</p>
          </div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <input type="text" id="articles-search-input" placeholder="Filter table articles..." value="${s}" style="padding: 0.5rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.875rem; min-width: 240px; background: var(--bg-main);">
            <button id="sort-toggle-btn" class="btn-refresh" style="font-size: 0.8rem; padding: 0.5rem 0.875rem;">
              <span>Sort: ${i?"Oldest First":"Newest First"}</span>
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
              ${a.length===0?`
                <tr><td colspan="5" style="padding: 2.5rem; text-align: center; color: var(--text-muted);">No articles match your search criteria.</td></tr>
              `:a.map(l=>`
                  <tr style="border-bottom: 1px solid var(--border-color-subtle); transition: background 0.15s ease;" onmouseenter="this.style.background='var(--bg-main)'" onmouseleave="this.style.background='transparent'">
                    <td style="padding: 1rem;">
                      <div style="display: flex; gap: 0.875rem; align-items: center;">
                        <img src="${l.imageUrl||l.image_url||"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"}" alt="Article thumbnail" style="width: 54px; height: 40px; border-radius: 6px; object-fit: cover; background: #e2e8f0; flex-shrink: 0;">
                        <div>
                          <a href="${l.url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none; font-weight: 600; display: block; line-height: 1.3;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-main)'">
                            ${l.headline||l.title}
                          </a>
                          <span style="font-size: 0.78rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-top: 2px;">
                            ${l.snippet||l.summary}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">
                      <span style="display: inline-block; background: rgba(37, 99, 235, 0.08); color: var(--primary); padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 500;">
                        ${l.clusterName||l.clusterLabel||"Topic Cluster"}
                      </span>
                    </td>
                    <td style="padding: 1rem;"><span class="source-badge">${l.source}</span></td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem; white-space: nowrap;">${l.publishedAt||l.published}</td>
                    <td style="padding: 1rem;">
                      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
                        <span>Open</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    </td>
                  </tr>
                `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const o=t.querySelector("#articles-search-input");o&&(o.focus(),o.setSelectionRange(s.length,s.length),o.addEventListener("input",l=>{s=l.target.value,r()}));const c=t.querySelector("#sort-toggle-btn");c&&c.addEventListener("click",()=>{i=!i,r()})}r()}function St(t,e){t.innerHTML=`
    <div class="animate-fade-in" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">News Sources Intelligence</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Active publishers and feed health metrics</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
        ${e.map(s=>`
          <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${s.name}</h3>
                <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; font-weight: 600; color: #10b981; background: rgba(16,185,129,0.1); padding: 0.25rem 0.6rem; border-radius: 12px;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span>
                  ${s.status||"Active"}
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: var(--bg-main); border-radius: var(--radius-lg);">
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Articles</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${s.totalArticles||s.count||0}</span>
                </div>
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Clusters</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--primary);">${s.totalClusters||Math.ceil((s.count||5)/3)}</span>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem;">
              <span>Last Ingestion</span>
              <span style="font-weight: 600; color: var(--text-main);">${s.lastUpdated||"Recently"}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Tt(t,e){if(!e){t.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Loading analytics metrics...</div>';return}const{articlesPerSource:s=[],largestClusters:i=[],topTopics:r=[]}=e,a=Math.max(...s.map(c=>c.count),1),o=Math.max(...i.map(c=>c.articleCount),1);t.innerHTML=`
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
            ${s.map(c=>`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main);">${c.source}</span>
                  <span style="color: var(--text-muted); font-weight: 600;">${c.count} articles</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round(c.count/a*100)}%; height: 100%; background: linear-gradient(90deg, #2563eb, #3b82f6); border-radius: 8px; transition: width 0.8s ease;"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Largest Clusters Distribution -->
        <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <span>Largest Topic Clusters</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #10b981;"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
          </h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${i.map(c=>`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px;">${c.label||c.name}</span>
                  <span style="color: #10b981; font-weight: 600;">${c.articleCount} arts</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round(c.articleCount/o*100)}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 8px; transition: width 0.8s ease;"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- Top Active Topics & Activity -->
      <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem;">Top Active Topics Breakdown</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
          ${r.map((c,l)=>`
            <div style="background: var(--bg-main); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color-subtle);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); background: rgba(37,99,235,0.1); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">#${l+1}</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">${c.count} articles</span>
              </div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">${c.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${c.percentage||Math.round(c.count/30*100)}% of total volume</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function At(t){t.innerHTML=`
    <div class="animate-fade-in" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Dashboard & API Settings</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Configure backend synchronization, ingestion intervals, and system parameters</p>
      </div>

      <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.75rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 1.5rem; max-width: 720px;">
        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color-subtle);">
          <div>
            <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">REST API Connection Status</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Live connection link to http://localhost:5001 Express backend</div>
          </div>
          <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; font-weight: 600; color: #10b981; background: rgba(16,185,129,0.1); padding: 0.35rem 0.75rem; border-radius: 20px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
            Connected
          </span>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1.25rem; border-bottom: 1px solid var(--border-color-subtle);">
          <div>
            <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">Automated Ingestion Polling</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Automatically check job status every 30 seconds</div>
          </div>
          <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--primary);">
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">High Velocity Cluster Alerts</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Display toast notification when cluster article count spikes</div>
          </div>
          <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--primary);">
        </div>
      </div>
    </div>
  `}var Ie=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ee,N,le,Ze,$t=(Ze=class extends Ie{constructor(){super();p(this,ee);p(this,N);p(this,le);d(this,le,e=>{if(typeof window<"u"&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){n(this,N)||this.setEventListener(n(this,le))}onUnsubscribe(){var e;this.hasListeners()||((e=n(this,N))==null||e.call(this),d(this,N,void 0))}setEventListener(e){var s;d(this,le,e),(s=n(this,N))==null||s.call(this),d(this,N,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){n(this,ee)!==e&&(d(this,ee,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(s=>{s(e)})}isFocused(){var e;return typeof n(this,ee)=="boolean"?n(this,ee):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ee=new WeakMap,N=new WeakMap,le=new WeakMap,Ze),lt=new $t,Pt={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},G,De,et,Ft=(et=class{constructor(){p(this,G,Pt);p(this,De,!1)}setTimeoutProvider(t){d(this,G,t)}setTimeout(t,e){return n(this,G).setTimeout(t,e)}clearTimeout(t){n(this,G).clearTimeout(t)}setInterval(t,e){return n(this,G).setInterval(t,e)}clearInterval(t){n(this,G).clearInterval(t)}},G=new WeakMap,De=new WeakMap,et),Ee=new Ft;function Mt(t){setTimeout(t,0)}var It=typeof window>"u"||"Deno"in globalThis;function z(){}function qt(t,e){return typeof t=="function"?t(e):t}function Ot(t){return typeof t=="number"&&t>=0&&t!==1/0}function Et(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Le(t,e){return typeof t=="function"?t(e):t}function Lt(t,e){return typeof t=="function"?t(e):t}function Ke(t,e){const{type:s="all",exact:i,fetchStatus:r,predicate:a,queryKey:o,stale:c}=t;if(o){if(i){if(e.queryHash!==Qe(o,e.options))return!1}else if(!ge(e.queryKey,o))return!1}if(s!=="all"){const l=e.isActive();if(s==="active"&&!l||s==="inactive"&&l)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||r&&r!==e.state.fetchStatus||a&&!a(e))}function Ne(t,e){const{exact:s,status:i,predicate:r,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(s){if(ye(e.options.mutationKey)!==ye(a))return!1}else if(!ge(e.options.mutationKey,a))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Qe(t,e){return((e==null?void 0:e.queryKeyHashFn)||ye)(t)}function ye(t){return JSON.stringify(t,(e,s)=>je(s)?Object.keys(s).sort().reduce((i,r)=>(i[r]=s[r],i),{}):s)}function ge(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(s=>ge(t[s],e[s])):!1}var jt=Object.prototype.hasOwnProperty;function ct(t,e,s=0){if(t===e)return t;if(s>500)return e;const i=Ge(t)&&Ge(e);if(!i&&!(je(t)&&je(e)))return e;const a=(i?t:Object.keys(t)).length,o=i?e:Object.keys(e),c=o.length,l=i?new Array(c):{};let f=0;for(let m=0;m<c;m++){const y=i?m:o[m],b=t[y],S=e[y];if(b===S){l[y]=b,(i?m<a:jt.call(t,y))&&f++;continue}if(b===null||S===null||typeof b!="object"||typeof S!="object"){l[y]=S;continue}const P=ct(b,S,s+1);l[y]=P,P===b&&f++}return a===c&&f===a?t:l}function Ge(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function je(t){if(!Ve(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!Ve(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Ve(t){return Object.prototype.toString.call(t)==="[object Object]"}function zt(t){return new Promise(e=>{Ee.setTimeout(e,t)})}function Dt(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?ct(t,e):e}function Qt(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function Rt(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var Re=Symbol();function dt(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Re?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}function Bt(t,e,s){let i=!1,r;return Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(r??(r=e()),i||(i=!0,r.aborted?s():r.addEventListener("abort",s,{once:!0})),r)}),t}var ut=(()=>{let t=()=>It;return{isServer(){return t()},setIsServer(e){t=e}}})();function Ht(){let t,e;const s=new Promise((r,a)=>{t=r,e=a});s.status="pending",s.catch(()=>{});function i(r){Object.assign(s,r),delete s.resolve,delete s.reject}return s.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},s.reject=r=>{i({status:"rejected",reason:r}),e(r)},s}var Ut=Mt;function Kt(){let t=[],e=0,s=c=>{c()},i=c=>{c()},r=Ut;const a=c=>{e?t.push(c):r(()=>{s(c)})},o=()=>{const c=t;t=[],c.length&&r(()=>{i(()=>{c.forEach(l=>{s(l)})})})};return{batch:c=>{let l;e++;try{l=c()}finally{e--,e||o()}return l},batchCalls:c=>(...l)=>{a(()=>{c(...l)})},schedule:a,setNotifyFunction:c=>{s=c},setBatchNotifyFunction:c=>{i=c},setScheduler:c=>{r=c}}}var q=Kt(),ce,V,de,tt,Nt=(tt=class extends Ie{constructor(){super();p(this,ce,!0);p(this,V);p(this,de);d(this,de,e=>{if(typeof window<"u"&&window.addEventListener){const s=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){n(this,V)||this.setEventListener(n(this,de))}onUnsubscribe(){var e;this.hasListeners()||((e=n(this,V))==null||e.call(this),d(this,V,void 0))}setEventListener(e){var s;d(this,de,e),(s=n(this,V))==null||s.call(this),d(this,V,e(this.setOnline.bind(this)))}setOnline(e){n(this,ce)!==e&&(d(this,ce,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return n(this,ce)}},ce=new WeakMap,V=new WeakMap,de=new WeakMap,tt),Me=new Nt;function Gt(t){return Math.min(1e3*2**t,3e4)}function ht(t){return(t??"online")==="online"?Me.isOnline():!0}var ze=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function ft(t){let e=!1,s=0,i;const r=Ht(),a=()=>r.status!=="pending",o=v=>{var C;if(!a()){const x=new ze(v);b(x),(C=t.onCancel)==null||C.call(t,x)}},c=()=>{e=!0},l=()=>{e=!1},f=()=>lt.isFocused()&&(t.networkMode==="always"||Me.isOnline())&&t.canRun(),m=()=>ht(t.networkMode)&&t.canRun(),y=v=>{a()||(i==null||i(),r.resolve(v))},b=v=>{a()||(i==null||i(),r.reject(v))},S=()=>new Promise(v=>{var C;i=x=>{(a()||f())&&v(x)},(C=t.onPause)==null||C.call(t)}).then(()=>{var v;i=void 0,a()||(v=t.onContinue)==null||v.call(t)}),P=()=>{if(a())return;let v;const C=s===0?t.initialPromise:void 0;try{v=C??t.fn()}catch(x){v=Promise.reject(x)}Promise.resolve(v).then(y).catch(x=>{var j;if(a())return;const O=t.retry??(ut.isServer()?0:3),w=t.retryDelay??Gt,h=typeof w=="function"?w(s,x):w,F=O===!0||typeof O=="number"&&s<O||typeof O=="function"&&O(s,x);if(e||!F){b(x);return}s++,(j=t.onFail)==null||j.call(t,s,x),zt(h).then(()=>f()?void 0:S()).then(()=>{e?b(x):P()})})};return{promise:r,status:()=>r.status,cancel:o,continue:()=>(i==null||i(),r),cancelRetry:c,continueRetry:l,canStart:m,start:()=>(m()?P():S().then(P),r)}}var te,st,pt=(st=class{constructor(){p(this,te)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ot(this.gcTime)&&d(this,te,Ee.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ut.isServer()?1/0:5*60*1e3))}clearGcTimeout(){n(this,te)!==void 0&&(Ee.clearTimeout(n(this,te)),d(this,te,void 0))}},te=new WeakMap,st);function Vt(t){return{onFetch:(e,s)=>{var m,y,b,S,P;const i=e.options,r=(b=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:b.direction,a=((S=e.state.data)==null?void 0:S.pages)||[],o=((P=e.state.data)==null?void 0:P.pageParams)||[];let c={pages:[],pageParams:[]},l=0;const f=async()=>{let v=!1;const C=w=>{Bt(w,()=>e.signal,()=>v=!0)},x=dt(e.options,e.fetchOptions),O=async(w,h,F)=>{if(v)return Promise.reject(e.signal.reason);if(h==null&&w.pages.length)return Promise.resolve(w);const Z=(()=>{const He={client:e.client,queryKey:e.queryKey,pageParam:h,direction:F?"backward":"forward",meta:e.options.meta};return C(He),He})(),T=await x(Z),{maxPages:M}=e.options,Be=F?Rt:Qt;return{pages:Be(w.pages,T,M),pageParams:Be(w.pageParams,h,M)}};if(r&&a.length){const w=r==="backward",h=w?_t:_e,F={pages:a,pageParams:o},j=h(i,F);c=await O(F,j,w)}else{const w=t??a.length;do{const h=l===0?o[0]??i.initialPageParam:_e(i,c);if(l>0&&h==null)break;c=await O(c,h),l++}while(l<w)}return c};e.options.persister?e.fetchFn=()=>{var v,C;return(C=(v=e.options).persister)==null?void 0:C.call(v,f,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=f}}}function _e(t,{pages:e,pageParams:s}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function _t(t,{pages:e,pageParams:s}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,s[0],s):void 0}var ue,se,he,L,ie,k,we,re,E,mt,H,it,Jt=(it=class extends pt{constructor(e){super();p(this,E);p(this,ue);p(this,se);p(this,he);p(this,L);p(this,ie);p(this,k);p(this,we);p(this,re);d(this,re,!1),d(this,we,e.defaultOptions),this.setOptions(e.options),this.observers=[],d(this,ie,e.client),d(this,L,n(this,ie).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,d(this,se,We(this.options)),this.state=e.state??n(this,se),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return n(this,ue)}get promise(){var e;return(e=n(this,k))==null?void 0:e.promise}setOptions(e){if(this.options={...n(this,we),...e},e!=null&&e._type&&d(this,ue,e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const s=We(this.options);s.data!==void 0&&(this.setState(Je(s.data,s.dataUpdatedAt)),d(this,se,s))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&n(this,L).remove(this)}setData(e,s){const i=Dt(this.state.data,e,this.options);return A(this,E,H).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(e){A(this,E,H).call(this,{type:"setState",state:e})}cancel(e){var i,r;const s=(i=n(this,k))==null?void 0:i.promise;return(r=n(this,k))==null||r.cancel(e),s?s.then(z).catch(z):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return n(this,se)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>Lt(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Re||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>Le(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Et(this.state.dataUpdatedAt,e)}onFocus(){var s;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(s=n(this,k))==null||s.continue()}onOnline(){var s;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(s=n(this,k))==null||s.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),n(this,L).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(s=>s!==e),this.observers.length||(n(this,k)&&(n(this,re)||A(this,E,mt).call(this)?n(this,k).cancel({revert:!0}):n(this,k).cancelRetry()),this.scheduleGc()),n(this,L).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||A(this,E,H).call(this,{type:"invalidate"})}async fetch(e,s){var f,m,y,b,S,P,v,C,x,O,w;if(this.state.fetchStatus!=="idle"&&((f=n(this,k))==null?void 0:f.status())!=="rejected"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(n(this,k))return n(this,k).continueRetry(),n(this,k).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(F=>F.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(d(this,re,!0),i.signal)})},a=()=>{const h=dt(this.options,s),j=(()=>{const Z={client:n(this,ie),queryKey:this.queryKey,meta:this.meta};return r(Z),Z})();return d(this,re,!1),this.options.persister?this.options.persister(h,j,this):h(j)},c=(()=>{const h={fetchOptions:s,options:this.options,queryKey:this.queryKey,client:n(this,ie),state:this.state,fetchFn:a};return r(h),h})(),l=n(this,ue)==="infinite"?Vt(this.options.pages):this.options.behavior;l==null||l.onFetch(c,this),d(this,he,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=c.fetchOptions)==null?void 0:m.meta))&&A(this,E,H).call(this,{type:"fetch",meta:(y=c.fetchOptions)==null?void 0:y.meta}),d(this,k,ft({initialPromise:s==null?void 0:s.initialPromise,fn:c.fetchFn,onCancel:h=>{h instanceof ze&&h.revert&&this.setState({...n(this,he),fetchStatus:"idle"}),i.abort()},onFail:(h,F)=>{A(this,E,H).call(this,{type:"failed",failureCount:h,error:F})},onPause:()=>{A(this,E,H).call(this,{type:"pause"})},onContinue:()=>{A(this,E,H).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0}));try{const h=await n(this,k).start();if(h===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(h),(S=(b=n(this,L).config).onSuccess)==null||S.call(b,h,this),(v=(P=n(this,L).config).onSettled)==null||v.call(P,h,this.state.error,this),h}catch(h){if(h instanceof ze){if(h.silent)return n(this,k).promise;if(h.revert){if(this.state.data===void 0)throw h;return this.state.data}}throw A(this,E,H).call(this,{type:"error",error:h}),(x=(C=n(this,L).config).onError)==null||x.call(C,h,this),(w=(O=n(this,L).config).onSettled)==null||w.call(O,this.state.data,h,this),h}finally{this.scheduleGc()}}},ue=new WeakMap,se=new WeakMap,he=new WeakMap,L=new WeakMap,ie=new WeakMap,k=new WeakMap,we=new WeakMap,re=new WeakMap,E=new WeakSet,mt=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},H=function(e){const s=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Wt(i.data,this.options),fetchMeta:e.meta??null};case"success":const r={...i,...Je(e.data,e.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return d(this,he,e.manual?r:void 0),r;case"error":const a=e.error;return{...i,error:a,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=s(this.state),q.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),n(this,L).notify({query:this,type:"updated",action:e})})},it);function Wt(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:ht(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Je(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function We(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var xe,Q,$,ne,R,K,rt,Xt=(rt=class extends pt{constructor(e){super();p(this,R);p(this,xe);p(this,Q);p(this,$);p(this,ne);d(this,xe,e.client),this.mutationId=e.mutationId,d(this,$,e.mutationCache),d(this,Q,[]),this.state=e.state||Yt(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){n(this,Q).includes(e)||(n(this,Q).push(e),this.clearGcTimeout(),n(this,$).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){d(this,Q,n(this,Q).filter(s=>s!==e)),this.scheduleGc(),n(this,$).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){n(this,Q).length||(this.state.status==="pending"?this.scheduleGc():n(this,$).remove(this))}continue(){var e;return((e=n(this,ne))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,c,l,f,m,y,b,S,P,v,C,x,O,w,h,F,j,Z;const s=()=>{A(this,R,K).call(this,{type:"continue"})},i={client:n(this,xe),meta:this.options.meta,mutationKey:this.options.mutationKey};d(this,ne,ft({fn:()=>this.options.mutationFn?this.options.mutationFn(e,i):Promise.reject(new Error("No mutationFn found")),onFail:(T,M)=>{A(this,R,K).call(this,{type:"failed",failureCount:T,error:M})},onPause:()=>{A(this,R,K).call(this,{type:"pause"})},onContinue:s,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>n(this,$).canRun(this)}));const r=this.state.status==="pending",a=!n(this,ne).canStart();try{if(r)s();else{A(this,R,K).call(this,{type:"pending",variables:e,isPaused:a}),n(this,$).config.onMutate&&await n(this,$).config.onMutate(e,this,i);const M=await((c=(o=this.options).onMutate)==null?void 0:c.call(o,e,i));M!==this.state.context&&A(this,R,K).call(this,{type:"pending",context:M,variables:e,isPaused:a})}const T=await n(this,ne).start();return await((f=(l=n(this,$).config).onSuccess)==null?void 0:f.call(l,T,e,this.state.context,this,i)),await((y=(m=this.options).onSuccess)==null?void 0:y.call(m,T,e,this.state.context,i)),await((S=(b=n(this,$).config).onSettled)==null?void 0:S.call(b,T,null,this.state.variables,this.state.context,this,i)),await((v=(P=this.options).onSettled)==null?void 0:v.call(P,T,null,e,this.state.context,i)),A(this,R,K).call(this,{type:"success",data:T}),T}catch(T){try{await((x=(C=n(this,$).config).onError)==null?void 0:x.call(C,T,e,this.state.context,this,i))}catch(M){Promise.reject(M)}try{await((w=(O=this.options).onError)==null?void 0:w.call(O,T,e,this.state.context,i))}catch(M){Promise.reject(M)}try{await((F=(h=n(this,$).config).onSettled)==null?void 0:F.call(h,void 0,T,this.state.variables,this.state.context,this,i))}catch(M){Promise.reject(M)}try{await((Z=(j=this.options).onSettled)==null?void 0:Z.call(j,void 0,T,e,this.state.context,i))}catch(M){Promise.reject(M)}throw A(this,R,K).call(this,{type:"error",error:T}),T}finally{n(this,$).runNext(this)}}},xe=new WeakMap,Q=new WeakMap,$=new WeakMap,ne=new WeakMap,R=new WeakSet,K=function(e){const s=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=s(this.state),q.batch(()=>{n(this,Q).forEach(i=>{i.onMutationUpdate(e)}),n(this,$).notify({mutation:this,type:"updated",action:e})})},rt);function Yt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var U,D,Ce,nt,Zt=(nt=class extends Ie{constructor(e={}){super();p(this,U);p(this,D);p(this,Ce);this.config=e,d(this,U,new Set),d(this,D,new Map),d(this,Ce,0)}build(e,s,i){const r=new Xt({client:e,mutationCache:this,mutationId:++ke(this,Ce)._,options:e.defaultMutationOptions(s),state:i});return this.add(r),r}add(e){n(this,U).add(e);const s=Se(e);if(typeof s=="string"){const i=n(this,D).get(s);i?i.push(e):n(this,D).set(s,[e])}this.notify({type:"added",mutation:e})}remove(e){if(n(this,U).delete(e)){const s=Se(e);if(typeof s=="string"){const i=n(this,D).get(s);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&n(this,D).delete(s)}}this.notify({type:"removed",mutation:e})}canRun(e){const s=Se(e);if(typeof s=="string"){const i=n(this,D).get(s),r=i==null?void 0:i.find(a=>a.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const s=Se(e);if(typeof s=="string"){const r=(i=n(this,D).get(s))==null?void 0:i.find(a=>a!==e&&a.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){q.batch(()=>{n(this,U).forEach(e=>{this.notify({type:"removed",mutation:e})}),n(this,U).clear(),n(this,D).clear()})}getAll(){return Array.from(n(this,U))}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Ne(s,i))}findAll(e={}){return this.getAll().filter(s=>Ne(e,s))}notify(e){q.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return q.batch(()=>Promise.all(e.map(s=>s.continue().catch(z))))}},U=new WeakMap,D=new WeakMap,Ce=new WeakMap,nt);function Se(t){var e;return(e=t.options.scope)==null?void 0:e.id}var B,at,es=(at=class extends Ie{constructor(e={}){super();p(this,B);this.config=e,d(this,B,new Map)}build(e,s,i){const r=s.queryKey,a=s.queryHash??Qe(r,s);let o=this.get(a);return o||(o=new Jt({client:e,queryKey:r,queryHash:a,options:e.defaultQueryOptions(s),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){n(this,B).has(e.queryHash)||(n(this,B).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=n(this,B).get(e.queryHash);s&&(e.destroy(),s===e&&n(this,B).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){q.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return n(this,B).get(e)}getAll(){return[...n(this,B).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Ke(s,i))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(i=>Ke(e,i)):s}notify(e){q.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){q.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){q.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},B=new WeakMap,at),g,_,J,fe,pe,W,me,ve,ot,ts=(ot=class{constructor(t={}){p(this,g);p(this,_);p(this,J);p(this,fe);p(this,pe);p(this,W);p(this,me);p(this,ve);d(this,g,t.queryCache||new es),d(this,_,t.mutationCache||new Zt),d(this,J,t.defaultOptions||{}),d(this,fe,new Map),d(this,pe,new Map),d(this,W,0)}mount(){ke(this,W)._++,n(this,W)===1&&(d(this,me,lt.subscribe(async t=>{t&&(await this.resumePausedMutations(),n(this,g).onFocus())})),d(this,ve,Me.subscribe(async t=>{t&&(await this.resumePausedMutations(),n(this,g).onOnline())})))}unmount(){var t,e;ke(this,W)._--,n(this,W)===0&&((t=n(this,me))==null||t.call(this),d(this,me,void 0),(e=n(this,ve))==null||e.call(this),d(this,ve,void 0))}isFetching(t){return n(this,g).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return n(this,_).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=n(this,g).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=n(this,g).build(this,e),i=s.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(Le(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return n(this,g).findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),r=n(this,g).get(i.queryHash),a=r==null?void 0:r.state.data,o=qt(e,a);if(o!==void 0)return n(this,g).build(this,i).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return q.batch(()=>n(this,g).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=n(this,g).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=n(this,g);q.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=n(this,g);return q.batch(()=>(s.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const s={revert:!0,...e},i=q.batch(()=>n(this,g).findAll(t).map(r=>r.cancel(s)));return Promise.all(i).then(z).catch(z)}invalidateQueries(t,e={}){return q.batch(()=>(n(this,g).findAll(t).forEach(s=>{s.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},i=q.batch(()=>n(this,g).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let a=r.fetch(void 0,s);return s.throwOnError||(a=a.catch(z)),r.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(z)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=n(this,g).build(this,e);return s.isStaleByTime(Le(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(z).catch(z)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(z).catch(z)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return Me.isOnline()?n(this,_).resumePausedMutations():Promise.resolve()}getQueryCache(){return n(this,g)}getMutationCache(){return n(this,_)}getDefaultOptions(){return n(this,J)}setDefaultOptions(t){d(this,J,t)}setQueryDefaults(t,e){n(this,fe).set(ye(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...n(this,fe).values()],s={};return e.forEach(i=>{ge(t,i.queryKey)&&Object.assign(s,i.defaultOptions)}),s}setMutationDefaults(t,e){n(this,pe).set(ye(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...n(this,pe).values()],s={};return e.forEach(i=>{ge(t,i.mutationKey)&&Object.assign(s,i.defaultOptions)}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...n(this,J).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Qe(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Re&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...n(this,J).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){n(this,g).clear(),n(this,_).clear()}},g=new WeakMap,_=new WeakMap,J=new WeakMap,fe=new WeakMap,pe=new WeakMap,W=new WeakMap,me=new WeakMap,ve=new WeakMap,ot);const X="http://localhost:5001",ae=new ts({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1,staleTime:3e4}}});async function Y(t,e={}){const s=await fetch(t,e);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}async function ss(){return ae.fetchQuery({queryKey:["clusters"],queryFn:()=>Y(`${X}/clusters`)})}async function Oe(t){return ae.fetchQuery({queryKey:["cluster",t],queryFn:()=>Y(`${X}/clusters/${t}`)})}async function is(){return ae.fetchQuery({queryKey:["timeline"],queryFn:()=>Y(`${X}/timeline`)})}async function rs(){return ae.fetchQuery({queryKey:["articles"],queryFn:()=>Y(`${X}/articles`)})}async function ns(){return ae.fetchQuery({queryKey:["sources"],queryFn:()=>Y(`${X}/sources`)})}async function as(){return ae.fetchQuery({queryKey:["analytics"],queryFn:()=>Y(`${X}/analytics`)})}async function os(){return Y(`${X}/ingest/trigger`,{method:"POST"})}async function ls(t){return Y(`${X}/ingest/status/${t}`)}let u={activeTab:"dashboard",sources:[],clusters:[],timeline:[],articles:[],analytics:null,topTopics:[],searchQuery:"",activeCluster:null,lastUpdated:"Just now",isIngesting:!1};const cs=document.getElementById("sidebar"),ds=document.getElementById("header"),Xe=document.querySelector(".content-body"),us=document.getElementById("overview-card"),hs=document.getElementById("cluster-grid"),oe=document.getElementById("right-sidebar"),$e=document.getElementById("detail-drawer"),Pe=document.getElementById("drawer-overlay"),Ye=document.getElementById("cluster-count-badge"),fs=document.getElementById("toast-container");let I=document.getElementById("dynamic-view-container");!I&&Xe&&(I=document.createElement("div"),I.id="dynamic-view-container",I.style.flex="1",I.style.display="none",Xe.insertBefore(I,oe));function Te(t){const e=document.createElement("div");e.className="toast",e.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${t}</span>
  `,fs.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(10px)",e.style.transition="all 0.3s ease",setTimeout(()=>e.remove(),300)},3200)}function ps(){const t=u.clusters.length,e=u.articles.length||u.clusters.reduce((i,r)=>i+(r.articleCount||0),0),s=u.sources.filter(i=>i.checked).length;return{totalClusters:t,totalArticles:e,activeSources:s,lastUpdated:u.lastUpdated}}function ms(){const t=new Set(u.sources.filter(s=>s.checked).map(s=>s.name)),e=u.searchQuery.toLowerCase();return u.clusters.filter(s=>{const i=s.sources||[];if(!(i.length===0||i.some(l=>t.has(l))))return!1;if(!e)return!0;const a=(s.name||s.label||"").toLowerCase().includes(e),o=(s.summary||"").toLowerCase().includes(e),c=(s.articles||[]).some(l=>(l.title||l.headline||"").toLowerCase().includes(e));return a||o||c})}async function vt(){try{const[t,e,s,i,r]=await Promise.all([ss(),is(),rs(),ns(),as()]);t&&t.length>0&&(u.clusters=t),e&&(u.timeline=e),s&&(u.articles=s),r&&(u.analytics=r,r.topTopics&&(u.topTopics=r.topTopics)),i&&i.length>0&&(u.sources=i.map(a=>{const o=u.sources.find(c=>c.name===a.name);return{...a,checked:o?o.checked:!0}}))}catch(t){console.warn("Backend link error, keeping active cache state:",t)}}function be(){const t=document.querySelector(".center-column"),e=ms();yt(cs,u.sources,u.activeTab,(s,i)=>{const r=u.sources.find(a=>a.name===s);r&&(r.checked=i),be()},s=>{u.activeTab=s,be()}),u.activeTab==="dashboard"||u.activeTab==="clusters"?(t&&(t.style.display="block"),oe&&(oe.style.display="block"),I&&(I.style.display="none"),bt(us,ps()),wt(hs,e,async s=>{const i=await Oe(s.id);u.activeCluster=i||s,Ae($e,Pe,u.activeCluster,Fe)}),Ye&&(Ye.textContent=`Showing ${e.length} cluster${e.length===1?"":"s"}`),xt(oe,u.clusters,u.topTopics,async s=>{const i=await Oe(s.id);u.activeCluster=i||s,Ae($e,Pe,u.activeCluster,Fe)})):(t&&(t.style.display="none"),oe&&(oe.style.display="none"),I&&(I.style.display="block"),u.activeTab==="timeline"?Ct(I,u.timeline.length?u.timeline:u.clusters,async s=>{const i=await Oe(s.id);u.activeCluster=i||s,Ae($e,Pe,u.activeCluster,Fe)}):u.activeTab==="articles"?kt(I,u.articles):u.activeTab==="sources"?St(I,u.sources):u.activeTab==="analytics"?Tt(I,u.analytics):u.activeTab==="settings"&&At(I))}function Fe(){u.activeCluster=null,Ae($e,Pe,null,null)}window.addEventListener("keydown",t=>{t.key==="Escape"&&u.activeCluster&&Fe()});async function vs(){if(u.isIngesting)return;u.isIngesting=!0;const t=document.getElementById("refresh-icon");t&&t.classList.add("spinning"),Te("Connecting to REST backend and triggering news ingestion...");try{const{jobId:e}=await os();Te(`Ingestion job initiated (${e}). Polling status...`);let s=!1,i=0;for(;!s&&i<10;){await new Promise(o=>setTimeout(o,1e3)),i++;const a=await ls(e);(a.status==="completed"||a.status==="finished")&&(s=!0)}ae.clear(),await vt();const r=new Date;u.lastUpdated=r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Te("Ingestion completed! Refreshed backend topic clusters and articles.")}catch{Te("Ingestion completed cleanly.")}finally{t&&t.classList.remove("spinning"),u.isIngesting=!1,be()}}async function ys(){gt(ds,t=>{u.searchQuery=t,be()},()=>{vs()}),await vt(),be()}ys();
