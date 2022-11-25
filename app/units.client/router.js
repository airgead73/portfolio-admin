const { Router } = require('express');
const clientRouter = Router();
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');
const { profileRouter } = require('./profile');

clientRouter.use('/works', workRouter);
clientRouter.use('/photos', photoRouter);
clientRouter.use('/profile', profileRouter);

module.exports = clientRouter;