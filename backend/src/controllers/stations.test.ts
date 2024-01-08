import supertest from 'supertest';
import { describe, expect, test } from '@jest/globals';
import app from '../../app';

const api = supertest(app);
const baseURL = '/api/stations';

describe('station logic tests', () => {
  test('An error should occur given wrong id', async () => {
    const id = 'abc_0';
    await api.get(`${baseURL}/${id}`).expect(400);
  });

  test('An error should occur when station can not be found', async () => {
    const id = 1000000;
    await api.get(`${baseURL}/${id}`).expect(404);
  });

  test('Correct station information should show when given correct information', async () => {
    const id = 503;
    const response = await api
      .get(`${baseURL}/${id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body.name).toBe('Keilalahti');
    expect(response.body.address).toBe('Keilalahdentie 2');
    expect(response.body.startCount).toBe(3232);
    expect(response.body.startAvg).toBeGreaterThan(3448);
    expect(response.body.startAvg).toBeLessThan(3449);
    expect(response.body.endCount).toBe(3146);
    expect(response.body.endAvg).toBeGreaterThan(3420);
    expect(response.body.endAvg).toBeLessThan(3421);
  });

  test("Can show all stations' information at once", async () => {
    await api
      .get(`${baseURL}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});
