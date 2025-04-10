const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const createLegalOpinion = async (req, res) => {
    try {
        const { legalReviewType, legalIssueTitle, legalQuestions, ...otherData } = req.body; // Extract legalQuestions
        const contractReview = await prismaClient.legalOpinion.create({
            data: {
                ...otherData,
                reviewType: legalReviewType, // Map legalReviewType to reviewType
                issueTitle: legalIssueTitle, // Map legalIssueTitle to issueTitle
                questions: legalQuestions, // Map legalQuestions to questions
            },
        });
        res.status(201).json(contractReview);
    } catch (error) {
        console.error('Error creating LegalOpinion:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllLegalOpinions = async (req, res) => {
    try {
        const legalOpinions = await prismaClient.legalOpinion.findMany();
        res.json(legalOpinions);
    } catch (error) {
        console.error('Error fetching LegalOpinions:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createLegalOpinion,
    getAllLegalOpinions,
};
