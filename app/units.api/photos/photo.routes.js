const { Router } = require('express');
const photoRouter = Router();
const Photo = require('./photo');

// controller
const { create, read, detail, update, remove, drop } = require('./photo.controller');

// middleware
const { handleQuery } = require('../../middleware');
const populate = { path: 'work', select: 'title'};

// routes
photoRouter.route('/')
  .get(handleQuery(Photo, populate), read)
  .post(create)
  .delete(drop);

photoRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = photoRouter;