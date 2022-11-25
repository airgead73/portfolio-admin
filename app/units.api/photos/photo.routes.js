const { Router } = require('express');
const photoRouter = Router();

// controller
const { create, read, detail, update, remove, drop } = require('./photo.controller');

// routes
photoRouter.route('/')
  .get(read)
  .post(create)
  .delete(drop);

photoRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = photoRouter;