require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const legalOpinionRoutes = require('./routes/legalOpinionRoutes');
// const contractReviewRoutes = require('./routes/contractReviewRoutes');
const setupSwagger = require('./utils/swagger');
const { execSync } = require('child_process');
const redis = require('redis');
const winston = require('winston');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

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

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

setupSwagger(app);

const cache = redis.createClient({
    url: 'redis://redis:6379'
});

cache.on('error', (err) => console.error('Redis error:', err));
cache.connect();

app.use('/api', async (req, res, next) => {
    const key = req.originalUrl;
    const cachedData = await cache.get(key);
    if (cachedData) {
        console.log(`Cache hit for ${key}`);
        return res.json(JSON.parse(cachedData));
    }
    console.log(`API route accessed: ${req.method} ${req.originalUrl}`);
    res.sendResponse = res.json.bind(res);
    res.json = (body) => {
        cache.set(key, JSON.stringify(body), { EX: 60 });
        res.sendResponse(body);
    };
    next();
});

// Serve static files from React app
const staticPath = path.join(__dirname, '../admin/build');
if (!fs.existsSync(staticPath)) {
    console.warn(`Warning: Static files directory not found at ${staticPath}`);
}
app.use(express.static(staticPath));

// Fallback route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin/build', 'index.html'));
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.message);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
(async () => {
    try {
        console.log('Running database migrations...');
        execSync('npm run migrate', { stdio: 'inherit' });
    } catch (error) {
        console.error('Error running migrations:', error.message, error.stack);
        process.exit(1);
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            const authHeader = req.headers.authorization || '';
            const token = authHeader.split(' ')[1];
            if (token) {
                try {
                    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                    return { user };
                } catch (err) {
                    console.error('Invalid token:', err.message);
                }
            }
            return {};
        },
    });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(port, "0.0.0.0", () => {
        console.log(`Server running on ${host}:${port}`);
        console.log(`Swagger docs available at ${host}:${port}/api-docs`);
        console.log(`GraphQL endpoint available at ${host}:${port}/graphql`);
    });
})();