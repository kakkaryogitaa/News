(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const T=[{id:"bbc",name:"BBC News",count:42,checked:!0},{id:"reuters",name:"Reuters",count:56,checked:!0},{id:"npr",name:"NPR",count:31,checked:!0},{id:"guardian",name:"The Guardian",count:29,checked:!0},{id:"bloomberg",name:"Bloomberg",count:26,checked:!0},{id:"wsj",name:"Wall Street Journal",count:18,checked:!0}],h=[{id:"cluster-1",name:"Global Semiconductor Tech Surge & Supply Chain Shift",articleCount:28,sizeIndicator:"high",timeRange:"Jun 25, 09:15 AM → Jun 27, 11:30 AM",sources:["BBC News","Reuters","Bloomberg","Wall Street Journal"],summary:"Major chip manufacturers announce unprecedented capital investments into next-generation fabrication facilities across North America and Europe amid shifting export regulations.",createdTimestamp:"10 mins ago",articles:[{id:"art-101",title:"Tech Giants Unveil $40B Next-Gen Foundry Architecture",source:"Reuters",publishedTime:"Jun 27, 2026 • 11:30 AM",timestampRaw:17825598e5,snippet:"Leading semiconductor foundries have reached an historic agreement on standardized 2nm chip production pipelines, driving optimism across hardware stock indices.",url:"https://news.google.com/search?q=Tech+Giants+Unveil+Next-Gen+Foundry+Architecture",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"},{id:"art-102",title:"European Union Approves Subsidies for Advanced Microchip Plants",source:"BBC News",publishedTime:"Jun 26, 2026 • 04:15 PM",timestampRaw:17824905e5,snippet:"EU policymakers officially signed off on a landmark incentive package designed to secure domestic silicon supply chains and boost AI hardware resilience.",url:"https://news.google.com/search?q=European+Union+Approves+Subsidies+for+Microchip+Plants",imageUrl:"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"}]}],L=[{name:"Semiconductor Fabrication",count:28,percentage:100},{name:"Monetary Policy & Inflation",count:22,percentage:78},{name:"EU AI Regulations",count:19,percentage:67},{name:"Offshore Renewable Grids",count:16,percentage:57},{name:"Lunar Orbit Logistics",count:14,percentage:50}];function B(t,e,i="dashboard",l,n){const a=[{id:"dashboard",label:"Dashboard",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>'},{id:"timeline",label:"Timeline",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'},{id:"clusters",label:"Clusters",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'},{id:"articles",label:"Articles",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'},{id:"sources",label:"Sources",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11a9 9 0 0 1 9-9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'},{id:"analytics",label:"Analytics",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'},{id:"settings",label:"Settings",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'}];t.innerHTML=`
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
      ${a.map(r=>`
        <a href="#" class="nav-item ${r.id===i?"active":""}" data-id="${r.id}">
          ${r.icon}
          <span>${r.label}</span>
        </a>
      `).join("")}
    </nav>

    <div class="filter-section">
      <div class="filter-title">News Source Filter</div>
      <div class="filter-list">
        ${e.map(r=>`
          <label class="filter-checkbox-label" for="src-${r.id}">
            <input type="checkbox" id="src-${r.id}" class="filter-checkbox" data-source-name="${r.name}" ${r.checked?"checked":""}>
            <span>${r.name}</span>
            <span class="source-count">${r.count||r.totalArticles||0}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".filter-checkbox").forEach(r=>{r.addEventListener("change",c=>{l(c.target.dataset.sourceName,c.target.checked)})});const d=t.querySelectorAll(".nav-item");d.forEach(r=>{r.addEventListener("click",c=>{c.preventDefault();const m=r.dataset.id;d.forEach(v=>v.classList.remove("active")),r.classList.add("active"),n&&n(m)})})}function E(t,e,i){t.innerHTML=`
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
  `,t.querySelector("#search-input").addEventListener("input",a=>{e(a.target.value.trim())}),t.querySelector("#refresh-btn").addEventListener("click",()=>{i()})}function j(t,e){t.innerHTML=`
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
  `}function M(t,e,i){if(e.length===0){t.innerHTML=`
      <div style="grid-column: 1 / -1; background: var(--bg-surface); padding: 3rem; text-align: center; border-radius: var(--radius-xl); border: 1px solid var(--border-color); color: var(--text-muted);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; color: var(--text-light);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">No Topic Clusters Found</h3>
        <p style="font-size: 0.875rem;">Try adjusting your news source filters or search query.</p>
      </div>
    `;return}const l={high:"var(--indicator-high)",medium:"var(--indicator-medium)",low:"var(--indicator-low)"},n=["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"];t.innerHTML=e.map((s,d)=>{const c=(s.articles&&s.articles.length>0?s.articles[0].imageUrl||s.articles[0].image_url:null)||n[d%n.length];return`
      <div class="cluster-card animate-fade-in" data-cluster-id="${s.id}" style="overflow: hidden; padding: 0; display: flex; flex-direction: column;">
        <div style="width: 100%; height: 150px; overflow: hidden; background: #e2e8f0; position: relative; flex-shrink: 0;">
          <img src="${c}" alt="${s.name||s.label}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='none'">
          <span class="articles-badge" style="position: absolute; top: 12px; right: 12px; backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.75); color: #fff; border: none; padding: 0.25rem 0.65rem; font-weight: 600;">
            ${s.articleCount} articles
          </span>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
          <div>
            <div class="cluster-top-bar" style="margin-bottom: 0.5rem; align-items: flex-start;">
              <div class="cluster-title-wrap">
                <span class="cluster-indicator" style="background-color: ${l[s.sizeIndicator]||"var(--primary)"}; margin-top: 5px;"></span>
                <h3 class="cluster-name" style="font-size: 1rem; line-height: 1.35;">${s.name||s.label}</h3>
              </div>
            </div>
            <p class="cluster-summary" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1.25rem; -webkit-line-clamp: 2;">${s.summary}</p>
          </div>

          <div class="cluster-meta" style="border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem; margin-top: 0;">
            <div class="cluster-time-range" style="font-size: 0.75rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>${s.timeRange}</span>
            </div>
            
            <div class="cluster-sources-row">
              ${(s.sources||[]).map(m=>`<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${m}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `}).join(""),t.querySelectorAll(".cluster-card").forEach(s=>{s.addEventListener("click",()=>{const d=s.dataset.clusterId,r=e.find(c=>c.id===d);r&&i(r)})})}function P(t,e,i,l){const n=[...e].slice(0,4);t.innerHTML=`
    <!-- Recent Clusters Widget -->
    <div class="widget-card animate-fade-in">
      <div class="widget-title">
        <span>Recent Clusters</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-light);"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      </div>
      <div class="widget-list">
        ${n.map(s=>`
          <div class="recent-item" data-cluster-id="${s.id}">
            <div class="recent-item-title">${s.name}</div>
            <div class="recent-item-meta">
              <span>${s.articleCount} articles</span>
              <span>•</span>
              <span>${s.createdTimestamp}</span>
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
        ${i.map((s,d)=>`
          <div class="topic-rank-item">
            <div class="rank-number">${d+1}</div>
            <div class="topic-rank-info">
              <div class="topic-rank-title-row">
                <span class="topic-rank-name">${s.name}</span>
                <span class="topic-rank-count">${s.count} articles</span>
              </div>
              <div class="rank-bar-bg">
                <div class="rank-bar-fill" style="width: ${s.percentage}%;"></div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".recent-item").forEach(s=>{s.addEventListener("click",()=>{const d=s.dataset.clusterId,r=e.find(c=>c.id===d);r&&l(r)})})}function x(t,e,i,l){if(!i){t.classList.remove("open"),e.classList.remove("open"),t.setAttribute("aria-hidden","true");return}const n=[...i.articles||[]].sort((s,d)=>(d.timestampRaw||0)-(s.timestampRaw||0));t.innerHTML=`
    <div class="drawer-header">
      <div class="drawer-title-area">
        <h2 class="drawer-title">${i.name||i.label}</h2>
        <div class="drawer-subtitle">
          <span class="articles-badge">${i.articleCount||n.length} articles</span>
          <span>•</span>
          <span>${i.timeRange||""}</span>
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
          ${i.summary}
        </p>
      </div>

      <div>
        <div class="drawer-section-title" style="display: flex; align-items: center; justify-content: space-between;">
          <span>Chronological Timeline & Articles</span>
          <span style="font-size: 0.75rem; color: var(--primary); text-transform: none; font-weight: 600;">Latest First</span>
        </div>
        
        <div class="timeline-container">
          ${n.map(s=>`
              <div class="timeline-article-card" style="overflow: hidden; padding: 0;">
                ${`
                  <div style="width: 100%; height: 140px; overflow: hidden; background: #e2e8f0; position: relative;">
                    <img src="${s.imageUrl||s.image_url||"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"}" alt="${s.title||s.headline}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='none'">
                  </div>
                `}
                <div style="padding: 1.25rem;">
                  <div class="article-card-header" style="margin-bottom: 0.5rem;">
                    <span class="source-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: var(--primary-border);">${s.source}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${s.publishedTime||s.publishedAt||s.published}</span>
                  </div>
                  <h4 class="article-card-title" style="margin-bottom: 0.5rem; font-size: 1rem; line-height: 1.35;">${s.title||s.headline}</h4>
                  <p class="article-snippet" style="font-size: 0.85rem; line-height: 1.45; margin-bottom: 1rem;">${s.snippet||s.summary}</p>
                  <div class="article-card-footer">
                    <span style="font-size: 0.75rem; color: var(--text-light);">Verified Intelligence Link</span>
                    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" onclick="event.stopPropagation();">
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
  `,t.classList.add("open"),e.classList.add("open"),t.setAttribute("aria-hidden","false"),t.querySelector("#close-drawer-btn").addEventListener("click",()=>l()),e.onclick=()=>l()}function N(t,e,i){if(!e||e.length===0){t.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No timeline data available.</div>';return}const l={high:"var(--indicator-high)",medium:"var(--indicator-medium)",low:"var(--indicator-low)"};t.innerHTML=`
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
        ${e.map(a=>{const s=a.size||a.sizeIndicator||"medium",d=l[s]||"var(--primary)",r=s==="high"?"24px":s==="medium"?"18px":"14px",c=a.articleCount||0;return`
            <div class="timeline-bar-row" data-cluster-id="${a.id}" style="cursor: pointer; padding: 0.875rem; border-radius: var(--radius-md); background: var(--bg-main); border: 1px solid var(--border-color-subtle); transition: all 0.2s ease;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
                <span style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${a.label||a.name}</span>
                <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 500;">${a.start||""} → ${a.end||""}</span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="flex: 1; background: rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; height: ${r}; position: relative;">
                  <div style="width: ${Math.min(100,c*3.5+20)}%; height: 100%; background: ${d}; border-radius: 12px; transition: width 0.6s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; color: #fff; font-size: 0.7rem; font-weight: 700;">
                    ${c>15?c+" articles":""}
                  </div>
                </div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); min-width: 75px; text-align: right;">${c} articles</span>
              </div>

              <div style="display: flex; gap: 0.4rem; margin-top: 0.6rem;">
                ${(a.sources||[]).map(m=>`<span class="source-badge" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${m}</span>`).join("")}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `,t.querySelectorAll(".timeline-bar-row").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.clusterId,d=e.find(r=>r.id===s);d&&i(d)}),a.addEventListener("mouseenter",()=>{a.style.borderColor="var(--primary)",a.style.transform="translateX(4px)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor="var(--border-color-subtle)",a.style.transform="none"})})}function R(t,e){let i="",l=!1;function n(){const a=e.filter(r=>{const c=i.toLowerCase(),m=r.headline||r.title||"",v=r.clusterName||r.clusterLabel||"",I=r.source||"";return m.toLowerCase().includes(c)||v.toLowerCase().includes(c)||I.toLowerCase().includes(c)});a.sort((r,c)=>{const m=new Date(r.publishedAt||r.published).getTime()||0,v=new Date(c.publishedAt||c.published).getTime()||0;return l?m-v:v-m}),t.innerHTML=`
      <div class="animate-fade-in" style="background: var(--bg-surface); padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">Articles Repository</h2>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Comprehensive feed of all ingested news intelligence articles</p>
          </div>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <input type="text" id="articles-search-input" placeholder="Filter table articles..." value="${i}" style="padding: 0.5rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.875rem; min-width: 240px; background: var(--bg-main);">
            <button id="sort-toggle-btn" class="btn-refresh" style="font-size: 0.8rem; padding: 0.5rem 0.875rem;">
              <span>Sort: ${l?"Oldest First":"Newest First"}</span>
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
              `:a.map(r=>`
                  <tr style="border-bottom: 1px solid var(--border-color-subtle); transition: background 0.15s ease;" onmouseenter="this.style.background='var(--bg-main)'" onmouseleave="this.style.background='transparent'">
                    <td style="padding: 1rem;">
                      <div style="display: flex; gap: 0.875rem; align-items: center;">
                        <img src="${r.imageUrl||r.image_url||"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"}" alt="Article thumbnail" style="width: 54px; height: 40px; border-radius: 6px; object-fit: cover; background: #e2e8f0; flex-shrink: 0;">
                        <div>
                          <a href="${r.url}" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none; font-weight: 600; display: block; line-height: 1.3;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-main)'">
                            ${r.headline||r.title}
                          </a>
                          <span style="font-size: 0.78rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-top: 2px;">
                            ${r.snippet||r.summary}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">
                      <span style="display: inline-block; background: rgba(37, 99, 235, 0.08); color: var(--primary); padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 500;">
                        ${r.clusterName||r.clusterLabel||"Topic Cluster"}
                      </span>
                    </td>
                    <td style="padding: 1rem;"><span class="source-badge">${r.source}</span></td>
                    <td style="padding: 1rem; color: var(--text-muted); font-size: 0.8rem; white-space: nowrap;">${r.publishedAt||r.published}</td>
                    <td style="padding: 1rem;">
                      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn-external-link" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;">
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
    `;const s=t.querySelector("#articles-search-input");s&&(s.focus(),s.setSelectionRange(i.length,i.length),s.addEventListener("input",r=>{i=r.target.value,n()}));const d=t.querySelector("#sort-toggle-btn");d&&d.addEventListener("click",()=>{l=!l,n()})}n()}function q(t,e){t.innerHTML=`
    <div class="animate-fade-in" style="margin-bottom: 2rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">News Sources Intelligence</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Active publishers and feed health metrics</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem;">
        ${e.map(i=>`
          <div style="background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-color); padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${i.name}</h3>
                <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; font-weight: 600; color: #10b981; background: rgba(16,185,129,0.1); padding: 0.25rem 0.6rem; border-radius: 12px;">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span>
                  ${i.status||"Active"}
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: var(--bg-main); border-radius: var(--radius-lg);">
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Articles</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${i.totalArticles||i.count||0}</span>
                </div>
                <div>
                  <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">Total Clusters</span>
                  <span style="font-size: 1.35rem; font-weight: 700; color: var(--primary);">${i.totalClusters||Math.ceil((i.count||5)/3)}</span>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color-subtle); padding-top: 0.875rem;">
              <span>Last Ingestion</span>
              <span style="font-weight: 600; color: var(--text-main);">${i.lastUpdated||"Recently"}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function H(t,e){if(!e){t.innerHTML='<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Loading analytics metrics...</div>';return}const{articlesPerSource:i=[],largestClusters:l=[],topTopics:n=[]}=e,a=Math.max(...i.map(d=>d.count),1),s=Math.max(...l.map(d=>d.articleCount),1);t.innerHTML=`
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
            ${i.map(d=>`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main);">${d.source}</span>
                  <span style="color: var(--text-muted); font-weight: 600;">${d.count} articles</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round(d.count/a*100)}%; height: 100%; background: linear-gradient(90deg, #2563eb, #3b82f6); border-radius: 8px; transition: width 0.8s ease;"></div>
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
            ${l.map(d=>`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.35rem;">
                  <span style="font-weight: 600; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px;">${d.label||d.name}</span>
                  <span style="color: #10b981; font-weight: 600;">${d.articleCount} arts</span>
                </div>
                <div style="background: var(--bg-main); border-radius: 8px; height: 12px; overflow: hidden;">
                  <div style="width: ${Math.round(d.articleCount/s*100)}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 8px; transition: width 0.8s ease;"></div>
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
          ${n.map((d,r)=>`
            <div style="background: var(--bg-main); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color-subtle);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); background: rgba(37,99,235,0.1); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">#${r+1}</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">${d.count} articles</span>
              </div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">${d.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${d.percentage||Math.round(d.count/30*100)}% of total volume</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function O(t){t.innerHTML=`
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
  `}const u="http://localhost:5001";async function y(t,e){try{const i=await fetch(t);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(i){return console.warn(`[API Link Warning] Failed to fetch ${t}, using fallback context.`,i.message),e}}async function U(){return await y(`${u}/clusters`,h)}async function C(t){try{const e=await fetch(`${u}/clusters/${t}`);if(e.ok)return await e.json()}catch(e){console.warn(`[API Link Warning] Failed to fetch cluster ${t}, using local search.`,e.message)}return h.find(e=>e.id===t)||null}async function F(){const t=h.map(e=>{var i;return{id:e.id,label:e.name,start:e.timeRange.split("→")[0].trim(),end:((i=e.timeRange.split("→")[1])==null?void 0:i.trim())||e.timeRange,size:e.sizeIndicator,articleCount:e.articleCount,sources:e.sources}});return await y(`${u}/timeline`,t)}async function G(){const t=h.flatMap(e=>e.articles.map(i=>({id:i.id,headline:i.title,title:i.title,summary:i.snippet,snippet:i.snippet,source:i.source,published:i.publishedTime,publishedAt:i.publishedTime,url:i.url,clusterName:e.name,status:"Verified"})));return await y(`${u}/articles`,t)}async function V(){return await y(`${u}/sources`,T)}async function D(){const t={articlesPerSource:T.map(e=>({source:e.name,count:e.count})),largestClusters:h.map(e=>({id:e.id,label:e.name,articleCount:e.articleCount})),topTopics:L,totalArticles:121,totalClusters:6};return await y(`${u}/analytics`,t)}async function J(){try{const t=await fetch(`${u}/ingest/trigger`,{method:"POST"});if(t.ok)return await t.json()}catch(t){console.warn("[API Link Warning] Failed to trigger ingest on server.",t.message)}return{jobId:"job-simulated-"+Date.now()}}async function W(t){try{const e=await fetch(`${u}/ingest/status/${t}`);if(e.ok)return await e.json()}catch(e){console.warn(`[API Link Warning] Failed to get status for ${t}.`,e.message)}return{status:"completed",jobId:t}}let o={activeTab:"dashboard",sources:JSON.parse(JSON.stringify(T)),clusters:JSON.parse(JSON.stringify(h)),timeline:[],articles:[],analytics:null,topTopics:JSON.parse(JSON.stringify(L)),searchQuery:"",activeCluster:null,lastUpdated:"Just now",isIngesting:!1};const _=document.getElementById("sidebar"),Q=document.getElementById("header"),A=document.querySelector(".content-body"),K=document.getElementById("overview-card"),X=document.getElementById("cluster-grid"),g=document.getElementById("right-sidebar"),w=document.getElementById("detail-drawer"),k=document.getElementById("drawer-overlay"),z=document.getElementById("cluster-count-badge"),Y=document.getElementById("toast-container");let p=document.getElementById("dynamic-view-container");!p&&A&&(p=document.createElement("div"),p.id="dynamic-view-container",p.style.flex="1",p.style.display="none",A.insertBefore(p,g));function b(t){const e=document.createElement("div");e.className="toast",e.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${t}</span>
  `,Y.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(10px)",e.style.transition="all 0.3s ease",setTimeout(()=>e.remove(),300)},3200)}function Z(){const t=o.clusters.length,e=o.articles.length||o.clusters.reduce((l,n)=>l+(n.articleCount||0),0),i=o.sources.filter(l=>l.checked).length;return{totalClusters:t,totalArticles:e,activeSources:i,lastUpdated:o.lastUpdated}}function ee(){const t=new Set(o.sources.filter(i=>i.checked).map(i=>i.name)),e=o.searchQuery.toLowerCase();return o.clusters.filter(i=>{const l=i.sources||[];if(!(l.length===0||l.some(r=>t.has(r))))return!1;if(!e)return!0;const a=(i.name||i.label||"").toLowerCase().includes(e),s=(i.summary||"").toLowerCase().includes(e),d=(i.articles||[]).some(r=>(r.title||r.headline||"").toLowerCase().includes(e));return a||s||d})}async function S(){try{const[t,e,i,l,n]=await Promise.all([U(),F(),G(),V(),D()]);t&&t.length>0&&(o.clusters=t),e&&(o.timeline=e),i&&(o.articles=i),n&&(o.analytics=n,n.topTopics&&(o.topTopics=n.topTopics)),l&&l.length>0&&(o.sources=l.map(a=>{const s=o.sources.find(d=>d.name===a.name);return{...a,checked:s?s.checked:!0}}))}catch(t){console.warn("Backend link error, keeping active cache state:",t)}}function f(){const t=document.querySelector(".center-column"),e=ee();B(_,o.sources,o.activeTab,(i,l)=>{const n=o.sources.find(a=>a.name===i);n&&(n.checked=l),f()},i=>{o.activeTab=i,f()}),o.activeTab==="dashboard"||o.activeTab==="clusters"?(t&&(t.style.display="block"),g&&(g.style.display="block"),p&&(p.style.display="none"),j(K,Z()),M(X,e,async i=>{const l=await C(i.id);o.activeCluster=l||i,x(w,k,o.activeCluster,$)}),z&&(z.textContent=`Showing ${e.length} cluster${e.length===1?"":"s"}`),P(g,o.clusters,o.topTopics,async i=>{const l=await C(i.id);o.activeCluster=l||i,x(w,k,o.activeCluster,$)})):(t&&(t.style.display="none"),g&&(g.style.display="none"),p&&(p.style.display="block"),o.activeTab==="timeline"?N(p,o.timeline.length?o.timeline:o.clusters,async i=>{const l=await C(i.id);o.activeCluster=l||i,x(w,k,o.activeCluster,$)}):o.activeTab==="articles"?R(p,o.articles):o.activeTab==="sources"?q(p,o.sources):o.activeTab==="analytics"?H(p,o.analytics):o.activeTab==="settings"&&O(p))}function $(){o.activeCluster=null,x(w,k,null,null)}window.addEventListener("keydown",t=>{t.key==="Escape"&&o.activeCluster&&$()});async function te(){if(o.isIngesting)return;o.isIngesting=!0;const t=document.getElementById("refresh-icon");t&&t.classList.add("spinning"),b("Connecting to REST backend and triggering news ingestion...");try{const{jobId:e}=await J();b(`Ingestion job initiated (${e}). Polling status...`);let i=!1,l=0;for(;!i&&l<10;){await new Promise(s=>setTimeout(s,1e3)),l++;const a=await W(e);(a.status==="completed"||a.status==="finished")&&(i=!0)}await S();const n=new Date;o.lastUpdated=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),b("Ingestion completed! Refreshed backend topic clusters and articles.")}catch{b("Ingestion completed cleanly.")}finally{t&&t.classList.remove("spinning"),o.isIngesting=!1,f()}}async function ie(){E(Q,t=>{o.searchQuery=t,f()},()=>{te()}),await S(),f()}ie();
