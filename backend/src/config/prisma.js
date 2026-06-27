const path = require("path");
const { PrismaClient } = require("@prisma/client");

const envPath = path.resolve(__dirname, "../../../.env");
require("dotenv").config({ path: envPath });

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

module.exports = prisma;
