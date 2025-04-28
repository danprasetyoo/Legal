const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const createContractReview = async (req, res) => {
    try {
        const { contractReviewType, contractIssueTitle, contractQuestions, ...otherData } = req.body;
        const contractReviews = await prismaClient.contractReview.create({
            data: {
                ...otherData,
                reviewType: contractReviewType,
                issueTitle: contractIssueTitle,
                questions: contractQuestions,
            },
        });
        res.status(201).json(contractReviews);
    } catch (error) {
        console.error('Error creating Contract Review:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllContractReviews = async (req, res) => {
    try {
        const contractReviews = await prismaClient.contractReview.findMany();
        res.json(contractReviews);
    } catch (error) {
        console.error('Error fetching Contract Reviews:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createContractReview,
    getAllContractReviews,
};
