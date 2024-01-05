/**
 * Start of program.
 */

import app from './app';
import { PORT } from './src/utils/config';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
