const prisma = require("../config/prisma");

function getAllArticles() {
  return prisma.article.findMany({
    orderBy: { id: "desc" }
  });
}

module.exports = { getAllArticles };
