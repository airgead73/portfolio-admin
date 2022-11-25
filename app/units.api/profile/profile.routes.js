const { Router } = require('express');
const profileRouter = Router();

// controller
const { create, read, update, remove } = require('./profile.controller');

// routes
profileRouter.route('/')
  .get(read)
  .post(create)
  .patch(update)
  .delete(remove);

module.exports = profileRouter;