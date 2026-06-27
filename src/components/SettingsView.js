export function renderSettingsView(container) {
  container.innerHTML = `
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
  `;
}
