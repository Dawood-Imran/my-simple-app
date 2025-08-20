const request = require('supertest');
const app = require('./index');

let server;

beforeAll((done) => {
  server = app.listen(0, done); // Use port 0 to pick a random free port
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

test('GET / should return Hello World', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World!');
});