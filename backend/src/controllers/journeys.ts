import express, { Request, Response } from 'express';
import models from '../models';

const journeyRouter = express.Router();

journeyRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const journey = await models.Journey.findByPk(id, {
    include: [
      {
        model: models.Station,
        as: 'DepartureStation',
      },
      {
        model: models.Station,
        as: 'ReturnStation',
      },
    ],
    attributes: {
      exclude: ['id', 'departure_station_id', 'return_station_id'],
    },
  });
  response.json({ journey });
});

export default journeyRouter;
