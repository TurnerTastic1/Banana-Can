import express from 'express';

const app = express.Router();

app.get('/', (req: any, res: any) => {
  res.send('API is currently at version 1.0.0');
});

module.exports = app;