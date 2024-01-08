/* eslint-disable no-console */

/**
 * Utility functions related to database.
 */
import { Sequelize, Error } from 'sequelize';
import { DATABASE_URL } from './config';

/** Sequelize instantiation. */
export const sequelize = new Sequelize(DATABASE_URL, {
  retry: {
    max: Infinity,
    match: [
      /ConnectionError/,
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
      /SequelizeConnectionAcquireTimeoutError/,
      /Connection terminated unexpectedly/,
    ],
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

/**
 * Connect to database via sequelize.
 */
export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected');
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        `An error occurred during sequelize connection: ${error.message}.`,
      );
    } else {
      console.log(`An unrecognisable error occurred: ${error}`);
    }
    return process.exit(1);
  }
  return null;
};
