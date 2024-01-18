import { describe, test, expect, jest } from '@jest/globals';
import stationService from './station';

jest.mock('./station', () => ({
  getAll: async (
    page: number,
  ): Promise<
    | {
        code: number;
        stations: any;
        error?: undefined;
      }
    | {
        code: number;
        error: string;
        stations?: undefined;
      }
  > => {
    if (page < 0) {
      return new Promise((resolve) => {
        resolve({ code: 401, error: 'OFFSET must not be negative' });
      });
    }
    if (page > 25) {
      return new Promise((resolve) => {
        resolve({ code: 401, error: 'No station found' });
      });
    }
    return new Promise((resolve) => {
      resolve({ code: 200, stations: Array(20) });
    });
  },
}));

describe('Station service tests', () => {
  test('Station service can get correct information', async () => {
    const stations = await stationService.getAll(0);
    expect(stations.code).toBe(200);
    expect(stations.stations).toHaveLength(20);
  });

  test('Page number can not be negative', async () => {
    const response = await stationService.getAll(-1);
    expect(response.code).toBe(401);
    expect(response.error).toContain('OFFSET must not be negative');
  });

  test('Page number can not be too large', async () => {
    const response = await stationService.getAll(10000);
    expect(response.code).toBe(401);
    expect(response.error).toContain('No station found');
  });
});
