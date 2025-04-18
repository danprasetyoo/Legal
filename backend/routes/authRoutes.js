const express = require('express');
const { login } = require('../controller/authController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login as an admin
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       400:
 *         description: Missing username or password
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', login);

/**
 * @swagger
 * /api/protected:
 *   get:
 *     summary: Access a protected route
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted to the protected route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: This is a protected route
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 12345
 *                     username:
 *                       type: string
 *                       example: admin
 *       401:
 *         description: Unauthorized access
 */

router.get('/protected', authenticateToken, (req, res) => {
    console.log('Accessing protected route with user:', req.user);
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;