const { Router } = require('express');
const clientRouter = Router();
const homeRouter = require('./home');
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');
const { profileRouter } = require('./profile');

// middleware
const { checkAuthClient, checkMethod } = require('../middleware');
//clientRouter.use(checkAuthClient);
clientRouter.use(checkMethod('GET'));

// routes
clientRouter.use('/', homeRouter);
clientRouter.use('/works', workRouter);
clientRouter.use('/photos', photoRouter);
clientRouter.use('/profile', profileRouter);

module.exports = clientRouter;