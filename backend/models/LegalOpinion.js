const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const LegalOpinion = {
    create: async (data) => {
        return await prismaClient.legalOpinion.create({ data });
    },
    findAll: async () => {
        return await prismaClient.legalOpinion.findMany();
    },
};

module.exports = LegalOpinion;
