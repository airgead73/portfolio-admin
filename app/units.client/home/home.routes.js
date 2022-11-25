const { Router } = require('express');
const homeRouter = Router();

// controllers 
const { read } = require('./home.controller');

// routes
homeRouter.get('/', read);

module.exports = homeRouter;