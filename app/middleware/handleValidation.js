const { body, validationResult } = require('express-validator');
const { workArray, photoArray } = require('./validationArrays');

const validationRules = ($method) => {

  switch($method) {
    case 'createWork':
      return workArray;
      break;
    case 'createPhoto':
      return photoArray;
      break;
  }

}

const validate = (req, res, next) => {

  const errors = validationResult(req);

  if(errors.isEmpty()) {
    res.val_results = {
      success: true,
      errors: null
    }

    return next();

  }

  const extractedErrors = [];
  
  errors.array().map(err => extractedErrors.push({ field: err.param, message: err.msg }));

  res.val_results = {
    success: false,
    errors
  }

  return next();

}

module.exports = {
  validationRules, validate
}