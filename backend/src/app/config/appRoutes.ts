import express from 'express';

const app = express.Router();

const routes = require('../routes/routes');
const authRoutes = require('../routes/auth/auth.routes');

app.use('', routes);
app.use('/auth', authRoutes);

module.exports = app;