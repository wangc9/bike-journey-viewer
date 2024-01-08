/** Station handlers. */
import express, { Request, Response } from 'express';
import models from '../models';
import Journey from '../models/journey';

const stationRouter = express.Router();

/**
 * Get all stations.
 *
 * @returns `{...Array<Station>}`
 */
stationRouter.get('/', async (_request: Request, response: Response) => {
  const stations = await models.Station.findAll({});
  if (stations) {
    return response.json({ stations });
  }
  throw new ReferenceError('No station found');
});

/**
 * Get a single station by id.
 *
 * @returns `{name, address, startCount, startAvg, endCount, endAvg}`
 */
stationRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const arrayHandler = (journeyArray: Array<Journey>) => {
    const distances = journeyArray.map((journey) =>
      journey.distance ? journey.distance : 0,
    );
    const distanceSum = distances.reduce((a, b) => a + b, 0);
    const distanceAvg = distanceSum / distances.length;

    return { count: distances.length, avg: distanceAvg };
  };

  const station = await models.Station.findByPk(id);
  if (station) {
    const startJourneys = await models.Journey.findAll({
      where: { departureStationId: id },
    });
    const { count: startCount, avg: startAvg } = arrayHandler(startJourneys);

    const endJourneys = await models.Journey.findAll({
      where: { returnStationId: id },
    });
    const { count: endCount, avg: endAvg } = arrayHandler(endJourneys);

    return response.json({
      name: station.stationName,
      address: station.stationAddress,
      startCount,
      startAvg,
      endCount,
      endAvg,
    });
  }
  throw new ReferenceError('No station found');
});

export default stationRouter;
