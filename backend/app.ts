/**
 * The "index" of the backend.
 */

import express from 'express';
import cors from 'cors';

import { connectToDatabase } from './src/utils/database';

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

export default app;
