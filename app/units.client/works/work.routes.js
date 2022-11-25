const { Router } = require('express');
const workRouter = Router();

// controllers
const { create, read, detail, update, remove, drop } = require('./work.controller');

// routes
workRouter.get('/', read);

workRouter.get('/add', create);

workRouter.get('/drop', drop);

workRouter.get('/:id', detail);

workRouter.get('/:id/update', update);

workRouter.get('/:id/delete', remove);

module.exports = workRouter;