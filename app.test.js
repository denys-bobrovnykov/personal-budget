const app = require('./app');
const request = require('supertest');
const { assert } = require('chai');

describe('GET /', () => {
  it('returns welcome data', async () => {
    const expected = 'Hello World!';
    const response = await request(app).get('/');
    assert.equal(response.text, expected);
  });
});

describe('GET /envelopes', () => {
  it('returns object with envelopes', async () => {
    const response = await request(app).get('/envelopes').expect('Content-Type', /json/);
  });
});

describe('POST /envelopes', () => {
  const data = {
    id: '2',
    name: 'test',
    budget: 100
  };
  it('returns data and ok status', async () => {
    const response = await request(app).post('/envelopes').send(data);
    assert.equal(response.status, 200);
    assert.deepEqual(JSON.parse(response.text), data);
  });
});

describe('POST /envelopes', () => {
  const data = {
    // id: '',
    name: 'test',
    budget: 100
  };
  it('returns 400 and error message if data is incomplete', async () => {
    const response = await request(app).post('/envelopes').send(data);
    assert.equal(response.status, 400);
    assert.deepEqual(response.text, 'Error incomplete data');
  });
});
