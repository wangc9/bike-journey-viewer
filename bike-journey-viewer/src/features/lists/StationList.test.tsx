import { describe, test, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StationList from './StationList';

jest.mock('../../services/station', () => ({
  getAll: async (
    page: number,
  ): Promise<
    | {
        code: number;
        stations: Array<{ stationName: string }>;
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
      resolve({
        code: 200,
        stations: [
          { stationName: 'test1' },
          { stationName: 'test2' },
          { stationName: 'test3' },
          { stationName: 'test4' },
          { stationName: 'test5' },
          { stationName: 'test6' },
          { stationName: 'test7' },
          { stationName: 'test8' },
          { stationName: 'test9' },
          { stationName: 'test10' },
          { stationName: 'test11' },
          { stationName: 'test12' },
          { stationName: 'test13' },
          { stationName: 'test14' },
          { stationName: 'test15' },
          { stationName: 'test16' },
          { stationName: 'test17' },
          { stationName: 'test18' },
          { stationName: 'test19' },
          { stationName: 'test20' },
        ],
      });
    });
  },
}));

describe('Station list tests', () => {
  test('Can display stations', async () => {
    render(<StationList />);
    const station = screen.findByText('test17');
    expect(station).toBeDefined();
  });
});
