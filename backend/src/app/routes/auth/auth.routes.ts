import express from 'express';

const app = express.Router();

app.get('/', (req: any, res: any) => {
  res.send('new auth route');
});

module.exports = app;
