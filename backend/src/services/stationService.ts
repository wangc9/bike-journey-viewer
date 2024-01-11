import Journey from '../models/journey';

/**
 * Type definition for the return of {@link arrayHandler}.
 */
export interface CountAvgType {
  /** Count all journeys */
  count: number;
  /** Average distance of all journeys */
  avg: number;
  /** Count journeys longer than 10m */
  longDistanceCount: number;
  /** Average distance of all journeys longer than 10m */
  longDistanceAvg: number;
  /** Count journeys lasting longer than 10s */
  longTimeCount: number;
  /** Average distance of all journeys longer than 10s */
  longTimeDistAvg: number;
  /** Count of all journeys longer than 10m and lasting longer than 10s */
  strictCount: number;
  /** Average distance of all strictly valid journey */
  strictDistanceAvg: number;
}

/**
 * Calculate the number of journeys and the corresponding average distance.
 * Return four different combinations depending on the requirement (distance
 * and duration).
 *
 * @param journeyArray An array containing all journeys will non-null duration and distance
 *
 * @returns An object containing the count and average, defined at {@link CountAvgType}
 */
export default function arrayHandler(
  journeyArray: Array<Journey>,
): CountAvgType {
  /** Normal calculation */
  const disAndTime = journeyArray.map(({ duration, distance }) => ({
    duration: duration || 0,
    distance: distance || 0,
  }));
  const count = disAndTime.length;
  const distanceSum = disAndTime.reduce((a, b) => a + b.distance, 0);
  const distanceAvg = distanceSum / count;

  /** Disregard short distances (< 10m) */
  const longDistances = disAndTime.filter((item) => item.distance >= 10);
  const longDistanceCount = longDistances.length;
  const longDistanceSum = longDistances.reduce((a, b) => a + b.distance, 0);
  const longDistanceAvg = longDistanceSum / longDistanceCount;

  /** Disregard short travel time (< 10s) */

  const filteredDisAndTime = disAndTime.filter((item) => item.duration >= 10);
  const longTimeCount = filteredDisAndTime.length;
  const longTimeDistSum = filteredDisAndTime.reduce(
    (a, b) => a + b.distance,
    0,
  );
  const longTimeDistAvg = longTimeDistSum / longTimeCount;

  /** Disregard both previous scenarios */
  const strictDisAndTime = disAndTime.filter(
    (item) => item.distance >= 10 && item.duration >= 10,
  );
  const strictCount = strictDisAndTime.length;
  const strictDistanceSum = strictDisAndTime.reduce(
    (a, b) => a + b.distance,
    0,
  );
  const strictDistanceAvg = strictDistanceSum / strictCount;

  return {
    count,
    avg: distanceAvg,
    longDistanceCount,
    longDistanceAvg,
    longTimeCount,
    longTimeDistAvg,
    strictCount,
    strictDistanceAvg,
  };
}
