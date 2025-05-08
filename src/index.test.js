const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('debe responder con el archivo index.html', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/html/);
    });
});