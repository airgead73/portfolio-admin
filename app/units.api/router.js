const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./works');

apiRouter.use('/works', workRouter);

module.exports = apiRouter;