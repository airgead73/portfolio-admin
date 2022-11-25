const { Router } = require('express');
const profileRouter = Router();

// controllers
const { create, read, update, remove } = require('./profile.controller');

// routes
profileRouter.get('/', read);

profileRouter.get('/add', create);

profileRouter.get('/update', update);

profileRouter.get('/delete', remove);

module.exports = profileRouter;