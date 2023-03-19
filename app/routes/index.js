import duckduckgo from './duckduckgo.route';
import serverHealth from './serverHealth.route';

export default (app) => {
  app.use('/api/v1', duckduckgo);
  app.use('/api/v1/status', serverHealth);
  app.all('*', (req, res) => {
    res.status(404).send({
      status: 404,
      error: "Oops the url has been moved or doesn't exist"
    });
  });
};
