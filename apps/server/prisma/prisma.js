
process.env.PRISMA_GENERATE_SKIP_AUTOINSTALL = "1";
const { PrismaClient } = require("./generated/client");
const globalForPrisma = global;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "info"] : [],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

module.exports = prisma;
module.exports.prisma = prisma; 
module.exports.default = prisma;