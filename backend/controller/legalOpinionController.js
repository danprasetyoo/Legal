const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const createLegalOpinion = async (req, res) => {
    try {
        const { legalReviewType, legalIssueTitle, legalQuestions, ...otherData } = req.body;
        const legalOpinions = await prismaClient.legalOpinion.create({
            data: {
                ...otherData,
                reviewType: legalReviewType,
                issueTitle: legalIssueTitle,
                questions: legalQuestions,
            },
        });
        res.status(201).json(legalOpinions);
    } catch (error) {
        console.error('Error creating Legal Opinion:', error.message);
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
