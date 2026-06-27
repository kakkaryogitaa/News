const newsService = require("../services/newsService");

async function getClusters(req, res) {
  try {
    const clusters = await newsService.getAllClusters();
    res.status(200).json(clusters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch clusters" });
  }
}

async function getClusterById(req, res) {
  try {
    const cluster = await newsService.getClusterById(req.params.id);
    if (!cluster) {
      return res.status(404).json({ message: "Cluster not found" });
    }
    res.status(200).json(cluster);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch cluster" });
  }
}

async function getTimeline(req, res) {
  try {
    const timeline = await newsService.getTimelineData();
    res.status(200).json(timeline);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch timeline data" });
  }
}

async function getArticles(req, res) {
  try {
    const articles = await newsService.getAllArticles();
    res.status(200).json(articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
}

async function getSources(req, res) {
  try {
    const sources = await newsService.getSourcesData();
    res.status(200).json(sources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch sources" });
  }
}

async function getAnalytics(req, res) {
  try {
    const analytics = await newsService.getAnalyticsData();
    res.status(200).json(analytics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch analytics" });
  }
}

function triggerIngest(req, res) {
  try {
    const result = newsService.triggerIngestion();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to trigger ingestion" });
  }
}

function getIngestStatus(req, res) {
  try {
    const status = newsService.getJobStatus(req.params.jobId);
    res.status(200).json(status);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get ingest status" });
  }
}

module.exports = {
  getClusters,
  getClusterById,
  getTimeline,
  getArticles,
  getSources,
  getAnalytics,
  triggerIngest,
  getIngestStatus
};
