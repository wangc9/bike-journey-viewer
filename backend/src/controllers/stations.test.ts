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
    expect(response.body.startCount).toBe(3230);
    expect(response.body.startAvg).toBeGreaterThan(3450);
    expect(response.body.startAvg).toBeLessThan(3451);
    expect(response.body.endCount).toBe(3142);
    expect(response.body.endAvg).toBeGreaterThan(3424);
    expect(response.body.endAvg).toBeLessThan(3425);
  });

  test("Can show all stations' information at once", async () => {
    await api
      .get(`${baseURL}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('Can limit the number of response in pagination', async () => {
    const response = await api
      .get(`${baseURL}/?page=0`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body.stations).toHaveLength(20);
  });

  test('Different page show different information', async () => {
    const page0 = await api
      .get(`${baseURL}/?page=0`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const page1 = await api
      .get(`${baseURL}/?page=1`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(page0.body.stations[0].id).not.toEqual(page1.body.stations[0].id);
  });
});
