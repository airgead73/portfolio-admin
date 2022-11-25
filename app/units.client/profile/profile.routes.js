const { Router } = require('express');
const profileRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./profile.controller');

// routes
profileRouter.get('/', read);

profileRouter.get('/add', create);

profileRouter.get('/drop', drop);

profileRouter.get('/:id', detail);

profileRouter.get('/:id/update', update);

profileRouter.get('/:id/delete', remove);

module.exports = profileRouter;