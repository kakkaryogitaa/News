const newsService = require("../services/newsService");

async function getArticles(req, res) {
  try {
    const articles = await newsService.getAllArticles();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch articles",
    });
  }
}

module.exports = {
  getArticles,
};