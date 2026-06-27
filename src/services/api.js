import { QueryClient } from '@tanstack/react-query';

const API_BASE = import.meta.env.VITE_API_URL || import.meta.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 30_000
    }
  }
});

async function requestJson(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
}

export async function apiGetClusters() {
  return queryClient.fetchQuery({
    queryKey: ['clusters'],
    queryFn: () => requestJson(`${API_BASE}/clusters`)
  });
}

export async function apiGetClusterById(id) {
  return queryClient.fetchQuery({
    queryKey: ['cluster', id],
    queryFn: () => requestJson(`${API_BASE}/clusters/${id}`)
  });
}

export async function apiGetTimeline() {
  return queryClient.fetchQuery({
    queryKey: ['timeline'],
    queryFn: () => requestJson(`${API_BASE}/timeline`)
  });
}

export async function apiGetArticles() {
  return queryClient.fetchQuery({
    queryKey: ['articles'],
    queryFn: () => requestJson(`${API_BASE}/articles`)
  });
}

export async function apiGetSources() {
  return queryClient.fetchQuery({
    queryKey: ['sources'],
    queryFn: () => requestJson(`${API_BASE}/sources`)
  });
}

export async function apiGetAnalytics() {
  return queryClient.fetchQuery({
    queryKey: ['analytics'],
    queryFn: () => requestJson(`${API_BASE}/analytics`)
  });
}

export async function apiTriggerIngest() {
  return requestJson(`${API_BASE}/ingest/trigger`, { method: 'POST' });
}

export async function apiGetIngestStatus(jobId) {
  return requestJson(`${API_BASE}/ingest/status/${jobId}`);
}
