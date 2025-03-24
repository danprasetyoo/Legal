require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const setupSwagger = require('./utils/swagger');
const { execSync } = require('child_process');

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const requiredEnvVars = ['HOST', 'PORT', 'DATABASE_URL', 'ACCESS_TOKEN_SECRET', 'FRONTEND_URL'];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        console.error(`Environment variable ${varName} is not defined`);
        process.exit(1);
    } else {
        console.log(`Environment variable ${varName}: ${process.env[varName]}`);
    }
});

app.use(cors({
    origin: ['http://192.168.1.87:5000', 'http://192.168.1.87:5005'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));
app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', (req, res, next) => {
    console.log(`API route accessed: ${req.method} ${req.originalUrl}`);
    next();
}, authRoutes);

(async () => {
    try {
        console.log('Running database migrations...');
        execSync('npm run migrate', { stdio: 'inherit' });
    } catch (error) {
        console.error('Error running migrations:', error.message, error.stack);
        process.exit(1);
    }

    app.listen(port, "0.0.0.0", () => {
        console.log(`Server running on ${host}:${port}`);
        console.log(`Swagger docs available at  ${host}:${port}/api-docs`);
    });
})();