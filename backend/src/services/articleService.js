const prisma = require("../config/prisma");

function getAllArticles() {
  return prisma.articles.findMany({
    orderBy: { id: "desc" }
  });
}

module.exports = { getAllArticles };
