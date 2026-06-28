const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

console.log("Prisma keys:");
console.log(Object.keys(prisma));

module.exports = prisma;
