/**
 * The "index" of the backend.
 */

import express from 'express';
import cors from 'cors';
import journeyRouter from './src/controllers/journeys';
import { connectToDatabase } from './src/utils/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/journeys', journeyRouter);
connectToDatabase();

export default app;
