const request = require('supertest');

const server = require('../src/server');

describe('app main controller', () => {
  it('status should be a 404 NOT FOUND when using GET', async () => {
    const res = await request(server).get('/api/some-undefined-route');
    expect(res.status).toEqual(404);
  });

  it('status should be a 404 NOT FOUND when using POST', async () => {
    const res = await request(server).post('/api/some-undefined-route');
    expect(res.status).toEqual(404);
  });

  it('status should be a 404 NOT FOUND when using PUT', async () => {
    const res = await request(server).put('/api/some-undefined-route');
    expect(res.status).toEqual(404);
  });

  it('status should be a 404 NOT FOUND when using DELETE', async () => {
    const res = await request(server).delete('/api/some-undefined-route');
    expect(res.status).toEqual(404);
  });
});
