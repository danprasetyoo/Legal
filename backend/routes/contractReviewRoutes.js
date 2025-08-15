const express = require('express');
const router = express.Router();
const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

// Create a new contract review
router.post('/', async (req, res) => {
    try {
        const contractReview = await prismaClient.contractReview.create({
            data: req.body,
        });
        res.status(201).json(contractReview);
    } catch (error) {
        console.error('Error creating contract review:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all contract reviews
router.get('/', async (req, res) => {
    try {
        const contractReviews = await prismaClient.contractReview.findMany();
        res.json(contractReviews);
    } catch (error) {
        console.error('Error fetching contract reviews:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a contract review
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedContractReview = await prismaClient.contractReview.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedContractReview);
    } catch (error) {
        console.error('Error updating contract review:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a contract review
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prismaClient.contractReview.delete({
            where: { id },
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting contract review:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
