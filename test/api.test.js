const request = require('supertest');  
const app = require('../src/index.js'); 


describe('/', () => {
  it('should return 200 ', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
