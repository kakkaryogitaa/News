const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["error", "warn"]
});

module.exports = prisma;

console.log("🔥 DATABASE_URL USED:", process.env.DATABASE_URL);
