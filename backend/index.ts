/**
 * Start of program.
 */

import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
