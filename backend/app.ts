/**
 * The "index" of the backend.
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Error, QueryTypes, Sequelize } from 'sequelize';

const app = express();

/**
 * Connect to database via sequelize.
 */
const connect = async () => {
  dotenv.config();
  const { DATABASE_URL } = process.env;
  if (DATABASE_URL) {
    const sequelize = new Sequelize(DATABASE_URL);
    try {
      await sequelize.authenticate();
      const station = await sequelize.query(
        'SELECT * FROM station WHERE id=503',
        { type: QueryTypes.SELECT },
      );
      // eslint-disable-next-line no-console
      console.log(station);
      sequelize.close();
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-console
        console.log(
          `An error occurred during sequelize connection: ${error.message}.`,
        );
      }
    }
  }
};

app.use(cors());
app.use(express.json());
connect();

export default app;
