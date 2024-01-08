/**
 * The "index" of the backend.
 */

import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import journeyRouter from './src/controllers/journeys';
import stationRouter from './src/controllers/stations';
import { connectToDatabase } from './src/utils/database';
import errorHandler from './src/utils/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/journeys', journeyRouter);
app.use('/api/stations', stationRouter);
connectToDatabase();

app.use(errorHandler);

export default app;
