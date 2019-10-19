const request = require('supertest');

const server = require('../../src/server');

describe('index controller', () => {
  describe('GET /api', () => {
    describe('on success', () => {
      it('status should be a 200 OK', async () => {
        const res = await request(server).get('/');
        expect(res.status).toEqual(200);
      });

      it('body should contain property `message`', async () => {
        const res = await request(server).get('/');
        expect(res.body).toHaveProperty('message', 'API Working');
      });
    });
  });
});
