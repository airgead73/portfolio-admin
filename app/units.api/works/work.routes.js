const { Router } = require('express');
const workRouter = Router();
const Work = require('./work');

// controller
const { create, read, detail, update, remove, drop } = require('./work.controller');

// middleware 
const { checkMethod, handleID, handleQuery, validate, validationRules } = require('../../middleware');

workRouter.use('/:id', handleID(Work));

// routes
workRouter.route('/')
  .get(handleQuery(Work), read)
  .post(validationRules('createWork'), validate, create)
  .delete(drop);

workRouter.route('/:id')
  .get(detail)
  .patch(update)
  .delete(remove);

module.exports = workRouter;