import express from 'express';
import config from '../config/config';
const pgp = require('pg-promise')();

// * Config variables
const PORT = config.server.PORT;
const HOSTNAME = config.server.HOSTNAME;


// * express configuration
const app = express();

  // * Route configuration
const routes = require('./appRoutes');

app.use(express.json());

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('Have some bananas!');
});

// Server setup
app.listen(PORT,() => {
  console.log('The application is listening on ' + HOSTNAME + ':' + PORT);
});

// * database configuration and connection
const db = pgp(config.db);

// test your database
db.connect()
  .then((obj: any) => {
      console.log('Connected to the database');
      obj.done(); // success, release the connection;
  })
  .catch((error: any) => {
      console.log('ERROR:', error.message || error);
  });

// * Export app and db
module.exports = {
  app,
  db
};
