const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all items
router.get('/items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "Admin"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching items:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new item
router.post('/items', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO "Admin" (username, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating item:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update an item
router.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'UPDATE "Admin" SET username = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating item:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM "Admin" WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting item:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all content
router.get('/content', async (req, res) => {
    const { page } = req.query;
    try {
        const result = await pool.query('SELECT * FROM "Content" WHERE page = $1', [page]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching content:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create new content
router.post('/content', async (req, res) => {
    const { title, body, imageUrl, page } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO "Content" (title, body, imageUrl, page) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, body, imageUrl, page]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating content:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update content
router.put('/content/:id', async (req, res) => {
    const { id } = req.params;
    const { title, body, imageUrl, page } = req.body;
    try {
        const result = await pool.query(
            'UPDATE "Content" SET title = $1, body = $2, imageUrl = $3, page = $4 WHERE id = $5 RETURNING *',
            [title, body, imageUrl, page, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating content:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete content
router.delete('/content/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM "Content" WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting content:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
