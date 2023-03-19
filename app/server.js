/* eslint-disable no-console */
import 'dotenv/config';
import { createServer } from 'http';
import app from './application';

const server = createServer(app);
const { PORT, HOST } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});

process.on('SIGINT', async () => {
  console.info('Shutting down server gracefully...\n');
  await setTimeout(() => {
    server.close(() => {
      console.info('Server shut down.');
      process.exit(0);
    });
    console.clear();
  }, 2000);
});

// Error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  process.exit(1);
});
