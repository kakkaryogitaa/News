const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const apiController = require("./controllers/apiController");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.use("/health", healthRoutes);

// NewsPulse REST Endpoints as per Context Specification
app.get("/clusters", apiController.getClusters);
app.get("/clusters/:id", apiController.getClusterById);
app.get("/timeline", apiController.getTimeline);
app.get("/articles", apiController.getArticles);
app.get("/sources", apiController.getSources);
app.get("/analytics", apiController.getAnalytics);

app.post("/ingest/trigger", apiController.triggerIngest);
app.get("/ingest/status/:jobId", apiController.getIngestStatus);

// Also mount under /api prefix for proxy flexibility
app.get("/api/clusters", apiController.getClusters);
app.get("/api/clusters/:id", apiController.getClusterById);
app.get("/api/timeline", apiController.getTimeline);
app.get("/api/articles", apiController.getArticles);
app.get("/api/sources", apiController.getSources);
app.get("/api/analytics", apiController.getAnalytics);
app.post("/api/ingest/trigger", apiController.triggerIngest);
app.get("/api/ingest/status/:jobId", apiController.getIngestStatus);

module.exports = app;