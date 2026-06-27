const prisma = require("../config/prisma");

const jobs = new Map();

/**
 * GET ALL ARTICLES (REAL DB DATA)
 */
async function getAllArticles() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { published: "desc" },
      select: {
        id: true,
        title: true,
        summary: true,
        url: true,
        source: true,
        published: true,
        content: true
      }
    });

    return articles.map((article) => ({
      id: article.id.toString(),
      headline: article.title,
      title: article.title,
      summary: article.summary || article.content || "",
      snippet: article.summary || article.content || "",
      source: article.source,
      published: article.published ? article.published.toISOString() : null,
      publishedAt: article.published ? article.published.toISOString() : null,
      url: article.url,
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
      image_url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
      clusterId: null,
      clusterName: "Live data",
      status: "Verified"
    }));
  } catch (error) {
    console.error("🔥 ERROR in getAllArticles:", error);
    throw error;
  }
}

/**
 * GET CLUSTERS (TEMP: derived from articles)
 */
async function getAllClusters() {
  try {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        source: true,
        published: true
      }
    });

    return articles.map((article) => ({
      id: article.id.toString(),
      name: article.title,
      label: article.title,
      summary: article.source,
      sizeIndicator: "Live",
      timeRange: "Live - Now",
      startTime: article.published
        ? article.published.toISOString()
        : new Date().toISOString(),
      endTime: article.published
        ? article.published.toISOString()
        : new Date().toISOString(),
      createdTimestamp: new Date().toISOString(),
      articleCount: 1,
      sources: [article.source]
    }));
  } catch (error) {
    console.error("🔥 ERROR in getAllClusters:", error);
    throw error;
  }
}

/**
 * GET SINGLE ARTICLE (CLUSTER VIEW)
 */
async function getClusterById(id) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        summary: true,
        url: true,
        source: true,
        published: true,
        content: true
      }
    });

    if (!article) return null;

    return {
      id: article.id.toString(),
      name: article.title,
      label: article.title,
      summary: article.summary || article.content || "",
      sizeIndicator: "Live",
      timeRange: "Live - Now",
      startTime: article.published?.toISOString() || new Date().toISOString(),
      endTime: article.published?.toISOString() || new Date().toISOString(),
      createdTimestamp: article.published?.toISOString() || new Date().toISOString(),
      articleCount: 1,
      sources: [article.source],
      articles: [
        {
          id: article.id.toString(),
          title: article.title,
          headline: article.title,
          summary: article.summary || article.content || "",
          snippet: article.summary || article.content || "",
          source: article.source,
          published: article.published?.toISOString() || null,
          publishedAt: article.published?.toISOString() || null,
          publishedTime: article.published?.toISOString() || null,
          timestampRaw: article.published?.toISOString() || new Date().toISOString(),
          url: article.url,
          imageUrl:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
          image_url:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80"
        }
      ]
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
    const articles = await prisma.article.findMany({
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
  triggerIngestion,
  getJobStatus
};
