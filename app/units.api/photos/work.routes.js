const { Router } = require('express');
const workRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./work.controller');

// routes
workRouter.route('/')
  .get(read)
  .post(create)
  .delete(drop);

workRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = workRouter;