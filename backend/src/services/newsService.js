const prisma = require("../config/prisma");

const jobs = new Map();

/**
 * GET ALL ARTICLES (REAL DB DATA)
 */
async function getAllArticles() {
  try {
    const articles = await prisma.articles.findMany({
      orderBy: { id: "desc" },
      include: {
        clusters: true
      }
    });

    return articles.map((article) => {
      let publishedIso = null;
      if (article.published) {
        const parsedDate = new Date(article.published);
        if (!isNaN(parsedDate.getTime())) {
          publishedIso = parsedDate.toISOString();
        } else {
          publishedIso = article.published;
        }
      }

      return {
        id: article.id.toString(),
        headline: article.title,
        title: article.title,
        summary: article.summary || article.content || "",
        snippet: article.summary || article.content || "",
        source: article.source,
        published: publishedIso,
        publishedAt: publishedIso,
        url: article.url,
        imageUrl: article.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        image_url: article.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
        clusterId: article.cluster_id ? article.cluster_id.toString() : null,
        clusterName: article.clusters ? article.clusters.label : "Unclustered",
        status: "Verified"
      };
    });
  } catch (error) {
    console.error("🔥 ERROR in getAllArticles:", error);
    throw error;
  }
}

/**
 * GET CLUSTERS (REAL DB DATA)
 */
async function getAllClusters() {
  try {
    const clusters = await prisma.clusters.findMany({
      include: {
        articles: true
      }
    });

    return clusters.map((cluster) => {
      const sources = Array.from(new Set(cluster.articles.map(a => a.source)));
      return {
        id: cluster.id.toString(),
        name: cluster.label,
        label: cluster.label,
        summary: cluster.summary || "",
        sizeIndicator: cluster.size_indicator || "medium",
        timeRange: `${cluster.start_time || "N/A"} - ${cluster.end_time || "N/A"}`,
        startTime: cluster.start_time || new Date().toISOString(),
        endTime: cluster.end_time || new Date().toISOString(),
        createdTimestamp: cluster.created_at || new Date().toISOString(),
        articleCount: cluster.articles.length,
        sources: sources
      };
    });
  } catch (error) {
    console.error("🔥 ERROR in getAllClusters:", error);
    throw error;
  }
}

/**
 * GET SINGLE CLUSTER BY ID (REAL DB DATA)
 */
async function getClusterById(id) {
  try {
    const cluster = await prisma.clusters.findUnique({
      where: { id: Number(id) },
      include: {
        articles: true
      }
    });

    if (!cluster) return null;

    const sources = Array.from(new Set(cluster.articles.map(a => a.source)));

    return {
      id: cluster.id.toString(),
      name: cluster.label,
      label: cluster.label,
      summary: cluster.summary || "",
      sizeIndicator: cluster.size_indicator || "medium",
      timeRange: `${cluster.start_time || "N/A"} - ${cluster.end_time || "N/A"}`,
      startTime: cluster.start_time || new Date().toISOString(),
      endTime: cluster.end_time || new Date().toISOString(),
      createdTimestamp: cluster.created_at || new Date().toISOString(),
      articleCount: cluster.articles.length,
      sources: sources,
      articles: cluster.articles.map(a => {
        let publishedIso = null;
        if (a.published) {
          const parsedDate = new Date(a.published);
          if (!isNaN(parsedDate.getTime())) {
            publishedIso = parsedDate.toISOString();
          } else {
            publishedIso = a.published;
          }
        }
        return {
          id: a.id.toString(),
          title: a.title,
          headline: a.title,
          summary: a.summary || a.content || "",
          snippet: a.summary || a.content || "",
          source: a.source,
          published: publishedIso,
          publishedAt: publishedIso,
          publishedTime: publishedIso,
          timestampRaw: a.timestamp_raw ? a.timestamp_raw.toString() : null,
          url: a.url,
          imageUrl: a.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
          image_url: a.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"
        };
      })
    };
  } catch (error) {
    console.error("🔥 ERROR in getClusterById:", error);
    throw error;
  }
}

/**
 * SOURCES
 */
async function getSourcesData() {
  try {
    const articles = await prisma.articles.findMany({
      select: { source: true }
    });

    const sourceMap = new Map();

    articles.forEach((article) => {
      const current = sourceMap.get(article.source) || 0;
      sourceMap.set(article.source, current + 1);
    });

    return Array.from(sourceMap.entries()).map(([name, count]) => ({
      id: name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name,
      checked: true,
      count,
      totalArticles: count,
      totalClusters: 1,
      lastUpdated: new Date().toISOString(),
      status: "Active"
    }));
  } catch (error) {
    console.error("🔥 ERROR in getSourcesData:", error);
    throw error;
  }
}

/**
 * ANALYTICS
 */
async function getAnalyticsData() {
  const articles = await getAllArticles();
  const clusters = await getAllClusters();

  const sourceMap = {};

  articles.forEach((article) => {
    sourceMap[article.source] = (sourceMap[article.source] || 0) + 1;
  });

  const articlesPerSource = Object.keys(sourceMap).map((source) => ({
    source,
    count: sourceMap[source]
  }));

  const largestClusters = clusters
    .map((c) => ({
      id: c.id,
      label: c.label,
      articleCount: c.articleCount
    }))
    .sort((a, b) => b.articleCount - a.articleCount);

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

  return {
    articlesPerSource,
    largestClusters,
    topTopics,
    totalArticles: articles.length,
    totalClusters: clusters.length
  };
}

/**
 * TIMELINE DATA (REAL DB DATA)
 */
async function getTimelineData() {
  try {
    const clusters = await prisma.clusters.findMany({
      include: {
        articles: {
          select: { id: true }
        }
      }
    });

    return clusters.map((cluster) => {
      const count = cluster.articles.length;
      const intensity = Math.min(1.0, 0.2 + (count * 0.1));

      return {
        clusterId: cluster.id.toString(),
        label: cluster.label,
        start: cluster.start_time || new Date().toISOString(),
        end: cluster.end_time || new Date().toISOString(),
        articleCount: count,
        intensity: parseFloat(intensity.toFixed(2))
      };
    });
  } catch (error) {
    console.error("🔥 ERROR in getTimelineData:", error);
    throw error;
  }
}

/**
 * INGESTION JOB (MOCK)
 */
function triggerIngestion() {
  const jobId = "job-" + Date.now();

  jobs.set(jobId, {
    status: "running",
    startTime: Date.now()
  });

  setTimeout(() => {
    jobs.set(jobId, {
      status: "completed",
      endTime: Date.now()
    });
  }, 2500);

  return { jobId };
}

/**
 * JOB STATUS
 */
function getJobStatus(jobId) {
  const job = jobs.get(jobId);

  if (!job) {
    return { status: "completed", jobId };
  }

  return { status: job.status, jobId };
}

module.exports = {
  getAllArticles,
  getAllClusters,
  getClusterById,
  getSourcesData,
  getAnalyticsData,
  getTimelineData,
  triggerIngestion,
  getJobStatus
};
