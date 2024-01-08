import { NextFunction, Request, Response } from 'express';
import { Error } from 'sequelize';

const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error.name === 'ReferenceError') {
    return response.status(404).json({ error: 'No station found' });
  }
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message });
  }

  next(error);
  return null;
};

export default errorHandler;
