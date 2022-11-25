const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');

apiRouter.use('/works', workRouter);
apiRouter.use('/photos', photoRouter);

module.exports = apiRouter;