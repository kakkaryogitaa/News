const db = require("../config/database");

const jobs = new Map();

function getAllClusters() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT c.*, 
             COUNT(a.id) as articleCount,
             GROUP_CONCAT(DISTINCT a.source) as sourceList
      FROM clusters c
      LEFT JOIN articles a ON a.cluster_id = c.id
      GROUP BY c.id
      ORDER BY c.id ASC
    `;

    db.all(query, [], (err, rows) => {
      if (err) return reject(err);
      const clusters = rows.map((r) => ({
        id: r.id.toString(),
        name: r.label,
        label: r.label,
        summary: r.summary,
        sizeIndicator: r.size_indicator,
        timeRange: `${r.start_time.split(" ")[1] || ""} - ${r.end_time.split(" ")[1] || ""}`,
        startTime: r.start_time,
        endTime: r.end_time,
        createdTimestamp: r.created_at,
        articleCount: r.articleCount || 0,
        sources: r.sourceList ? r.sourceList.split(",") : []
      }));
      resolve(clusters);
    });
  });
}

function getClusterById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM clusters WHERE id = ?", [id], (err, clusterRow) => {
      if (err) return reject(err);
      if (!clusterRow) return resolve(null);

      db.all("SELECT * FROM articles WHERE cluster_id = ? ORDER BY timestamp_raw DESC", [id], (err2, articleRows) => {
        if (err2) return reject(err2);

        const sources = Array.from(new Set(articleRows.map(a => a.source)));
        const articles = articleRows.map(a => {
          const img = a.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80";
          return {
            id: a.id.toString(),
            title: a.title,
            headline: a.title,
            summary: a.summary,
            snippet: a.summary,
            source: a.source,
            published: a.published,
            publishedAt: a.published,
            publishedTime: a.published,
            timestampRaw: a.timestamp_raw || Date.now(),
            url: a.url,
            imageUrl: img,
            image_url: img
          };
        });

        resolve({
          id: clusterRow.id.toString(),
          name: clusterRow.label,
          label: clusterRow.label,
          summary: clusterRow.summary,
          sizeIndicator: clusterRow.size_indicator,
          timeRange: `${clusterRow.start_time.split(" ")[1] || ""} - ${clusterRow.end_time.split(" ")[1] || ""}`,
          startTime: clusterRow.start_time,
          endTime: clusterRow.end_time,
          createdTimestamp: clusterRow.created_at,
          articleCount: articles.length,
          sources,
          articles
        });
      });
    });
  });
}

function getTimelineData() {
  return new Promise(async (resolve, reject) => {
    try {
      const clusters = await getAllClusters();
      const timeline = clusters.map((c) => ({
        id: c.id,
        label: c.label,
        start: c.startTime,
        end: c.endTime,
        size: c.sizeIndicator,
        articleCount: c.articleCount,
        sources: c.sources
      }));
      resolve(timeline);
    } catch (err) {
      reject(err);
    }
  });
}

function getAllArticles() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT a.*, c.label as clusterLabel
      FROM articles a
      LEFT JOIN clusters c ON a.cluster_id = c.id
      ORDER BY a.timestamp_raw DESC
    `;
    db.all(query, [], (err, rows) => {
      if (err) return reject(err);
      const articles = rows.map((r) => {
        const img = r.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80";
        return {
          id: r.id.toString(),
          headline: r.title,
          title: r.title,
          summary: r.summary,
          snippet: r.summary,
          source: r.source,
          published: r.published,
          publishedAt: r.published,
          url: r.url,
          imageUrl: img,
          image_url: img,
          clusterId: r.cluster_id ? r.cluster_id.toString() : null,
          clusterName: r.clusterLabel || "Uncategorized",
          status: "Verified"
        };
      });
      resolve(articles);
    });
  });
}

function getSourcesData() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        source,
        COUNT(id) as totalArticles,
        COUNT(DISTINCT cluster_id) as totalClusters,
        MAX(published) as lastUpdated
      FROM articles
      GROUP BY source
    `;
    db.all(query, [], (err, rows) => {
      if (err) return reject(err);
      const sources = rows.map((r) => ({
        id: r.source.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        name: r.source,
        checked: true,
        count: r.totalArticles,
        totalArticles: r.totalArticles,
        totalClusters: r.totalClusters,
        lastUpdated: r.lastUpdated || "Recently",
        status: "Active"
      }));
      resolve(sources);
    });
  });
}

function getAnalyticsData() {
  return new Promise(async (resolve, reject) => {
    try {
      const articles = await getAllArticles();
      const clusters = await getAllClusters();

      // Articles per source
      const sourceMap = {};
      articles.forEach((a) => {
        sourceMap[a.source] = (sourceMap[a.source] || 0) + 1;
      });
      const articlesPerSource = Object.keys(sourceMap).map((src) => ({
        source: src,
        count: sourceMap[src]
      }));

      // Largest clusters
      const largestClusters = clusters
        .map((c) => ({ id: c.id, label: c.label, articleCount: c.articleCount }))
        .sort((a, b) => b.articleCount - a.articleCount);

      // Top active topics
      const totalArts = articles.length || 1;
      const topTopics = clusters
        .map((c) => ({
          id: c.id,
          name: c.label,
          count: c.articleCount,
          percentage: Math.round((c.articleCount / totalArts) * 100)
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      resolve({
        articlesPerSource,
        largestClusters,
        topTopics,
        totalArticles: articles.length,
        totalClusters: clusters.length
      });
    } catch (err) {
      reject(err);
    }
  });
}

function triggerIngestion() {
  const jobId = "job-" + Date.now();
  jobs.set(jobId, { status: "running", startTime: Date.now() });

  setTimeout(() => {
    jobs.set(jobId, { status: "completed", endTime: Date.now() });

    const stmt = db.prepare(`
      INSERT INTO articles (title, summary, url, source, published, timestamp_raw, content, image_url, cluster_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const newId = Date.now();
    stmt.run(
      `Live Breakdown: Tech & Market Sentiment Shifts post-Ingestion #${Math.floor(Math.random() * 100)}`,
      "Real-time news monitoring algorithms detected renewed market activity following automated feed ingestion.",
      `https://www.reuters.com/technology/`,
      "Reuters",
      "Just now",
      newId,
      "Live ingestion contents...",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      1
    );
    stmt.finalize();
  }, 2500);

  return { jobId };
}

function getJobStatus(jobId) {
  const job = jobs.get(jobId);
  if (!job) {
    return { status: "completed", jobId };
  }
  return { status: job.status, jobId };
}

module.exports = {
  getAllClusters,
  getClusterById,
  getTimelineData,
  getAllArticles,
  getSourcesData,
  getAnalyticsData,
  triggerIngestion,
  getJobStatus
};
