const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const ContractReview = {
    create: async (data) => {
        return await prismaClient.contractReview.create({ data });
    },
    findAll: async () => {
        return await prismaClient.contractReview.findMany();
    },
};

module.exports = ContractReview;
