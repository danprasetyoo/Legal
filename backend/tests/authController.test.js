const request = require('supertest');
const app = require('../index');

describe('Auth Controller', () => {
    it('should return 400 if username or password is missing', async () => {
        const res = await request(app).post('/api/login').send({});
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Username and password are required');
    });

    it('should return 401 for invalid credentials', async () => {
        const res = await request(app).post('/api/login').send({ username: 'invalid', password: 'invalid' });
        expect(res.status).toBe(401);
        expect(res.body.message).toBe('Invalid credentials');
    });
});
