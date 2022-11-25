const { Router } = require('express');
const clientRouter = Router();
const homeRouter = require('./home');
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');
const { profileRouter } = require('./profile');

clientRouter.use('/', homeRouter);
clientRouter.use('/works', workRouter);
clientRouter.use('/photos', photoRouter);
clientRouter.use('/profile', profileRouter);

module.exports = clientRouter;