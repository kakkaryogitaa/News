const prisma = require("../prisma/client");

function getAllArticles() {
  return prisma.article.findMany({
    orderBy: { published: "desc" }
  });
}

module.exports = { getAllArticles };
