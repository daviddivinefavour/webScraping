import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const whitelist = ['*'];
const corsOptions = {
  origin(origin, callback) {
    if (
      whitelist.includes('*') ||
      whitelist.indexOf(origin) !== -1 ||
      !origin
    ) {
      callback(null, true);
    } else {
      callback(new Error('Access denied'));
    }
  }
};

app.use(express.json(), cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

routes(app);

export default app;
