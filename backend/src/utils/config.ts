import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL: DATABASE, PORT: PORTS } = process.env;

export const DATABASE_URL = DATABASE || '';

export const PORT = PORTS || 3001;
