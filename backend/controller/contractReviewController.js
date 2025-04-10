const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const createContractReview = async (req, res) => {
    try {
        const contractReview = await prismaClient.contractReview.create({
            data: req.body,
        });
        res.status(201).json(contractReview);
    } catch (error) {
        console.error('Error creating ContractReview:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllContractReviews = async (req, res) => {
    try {
        const contractReviews = await prismaClient.contractReview.findMany();
        res.json(contractReviews);
    } catch (error) {
        console.error('Error fetching ContractReviews:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createContractReview,
    getAllContractReviews,
};
