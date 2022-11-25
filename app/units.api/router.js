const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');
const { profileRouter } = require('./profile');

apiRouter.use('/works', workRouter);
apiRouter.use('/photos', photoRouter);
apiRouter.use('/profile', profileRouter);

module.exports = apiRouter;