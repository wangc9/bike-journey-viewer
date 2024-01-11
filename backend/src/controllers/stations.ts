/** Station handlers. */
import express, { Request, Response } from 'express';
import { Op } from 'sequelize';
import models from '../models';
import arrayHandler from '../services/stationService';

const stationRouter = express.Router();

/**
 * Get all stations. If no page is given, all stations will be returned.
 * Otherwise, only 20 entries on the given page are returned.
 *
 * @returns `stations` - An array of stations with {id, stationName, stationAddress, x, y}
 */
stationRouter.get('/', async (request: Request, response: Response) => {
  const { page } = request.query;
  let stations;
  if (page) {
    stations = await models.Station.findAll({
      offset: Number(page) * 20,
      limit: 20,
    });
  } else {
    stations = await models.Station.findAll({});
  }
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

  const station = await models.Station.findByPk(id);
  if (station) {
    const startJourneys = await models.Journey.findAll({
      where: {
        departureStationId: id,
        distance: { [Op.ne]: null },
        duration: { [Op.ne]: null },
      },
    });
    const {
      count: startCount,
      avg: startAvg,
      longDistanceCount: startLongDistCount,
      longDistanceAvg: startLongDistAvg,
      longTimeCount: startLongTimeCount,
      longTimeDistAvg: startLongTimeAvg,
      strictCount: startStrictCount,
      strictDistanceAvg: startStrictAvg,
    } = arrayHandler(startJourneys);

    const endJourneys = await models.Journey.findAll({
      where: {
        returnStationId: id,
        distance: { [Op.ne]: null },
        duration: { [Op.ne]: null },
      },
    });
    const {
      count: endCount,
      avg: endAvg,
      longDistanceCount: endLongDistCount,
      longDistanceAvg: endLongDistAvg,
      longTimeCount: endLongTimeCount,
      longTimeDistAvg: endLongTimeAvg,
      strictCount: endStrictCount,
      strictDistanceAvg: endStrictAvg,
    } = arrayHandler(endJourneys);

    return response.json({
      name: station.stationName,
      address: station.stationAddress,
      /** Count of all non-null journeys starting at the station */
      startCount,
      /** Average distance of all non-null journeys starting at the station */
      startAvg,
      /** Count journeys longer than 10m starting at the station */
      startLongDistCount,
      /** Average distance of all journeys longer than 10m starting at the station */
      startLongDistAvg,
      /** Count journeys lasting longer than 10s starting at the station */
      startLongTimeCount,
      /** Average distance of all journeys longer than 10s starting at the station */
      startLongTimeAvg,
      /** Count of all journeys longer than 10m and lasting longer than 10s starting at the station */
      startStrictCount,
      /** Average distance of all strictly valid journey starting at the station */
      startStrictAvg,
      /** Count of all non-null journeys terminating at the station */
      endCount,
      /** Average distance of all non-null journeys terminating at the station */
      endAvg,
      /** Count journeys longer than 10m terminating at the station */
      endLongDistCount,
      /** Average distance of all journeys longer than 10m terminating at the station */
      endLongDistAvg,
      /** Count journeys lasting longer than 10s terminating at the station */
      endLongTimeCount,
      /** Average distance of all journeys longer than 10s terminating at the station */
      endLongTimeAvg,
      /** Count of all journeys longer than 10m and lasting longer than 10s terminating at the station */
      endStrictCount,
      /** Average distance of all strictly valid journey terminating at the station */
      endStrictAvg,
    });
  }
  throw new ReferenceError('No station found');
});

export default stationRouter;
