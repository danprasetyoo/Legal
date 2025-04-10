const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const login = async (req, res) => {
    console.log('Login function called with body:', req.body);

    const { username, password } = req.body;

    if (!username || !password) {
        console.error('Missing username or password');
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        console.log('Attempting to find user:', username);
        const user = await Admin.findByUsername(username, password);

        if (!user) {
            console.error('Invalid credentials for username:', username);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('User found:', username);

        if (!process.env.ACCESS_TOKEN_SECRET) {
            console.error('ACCESS_TOKEN_SECRET is not defined in environment variables');
            return res.status(500).json({ message: 'Server configuration error: Missing ACCESS_TOKEN_SECRET' });
        }

        const token = jwt.sign(
            { username: user.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        );

        console.log('Token generated successfully');

        return res.json({
            message: 'Login successful',
            token
        });

    } catch (error) {
        console.error('Error during login:', error.message, error.stack);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    login,
};