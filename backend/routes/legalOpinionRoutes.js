const express = require('express');
const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const router = express.Router();

// Create a new legal opinion
router.post('/', async (req, res) => {
    try {
        const legalOpinion = await prismaClient.legalOpinion.create({
            data: req.body,
        });
        res.status(201).json(legalOpinion);
    } catch (error) {
        console.error('Error creating legal opinion:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all legal opinions
router.get('/', async (req, res) => {
    try {
        const legalOpinions = await prismaClient.legalOpinion.findMany();
        res.json(legalOpinions);
    } catch (error) {
        console.error('Error fetching legal opinions:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a legal opinion
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedLegalOpinion = await prismaClient.legalOpinion.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedLegalOpinion);
    } catch (error) {
        console.error('Error updating legal opinion:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a legal opinion
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prismaClient.legalOpinion.delete({
            where: { id },
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting legal opinion:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
