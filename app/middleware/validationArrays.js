const { body } = require('express-validator');
const mongoose = require('mongoose');    
const Work = require('../units.api/works/work');  

const workArray = [
  body('title')
    .not().isEmpty()
    .withMessage('Provide a title.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('mode')
    .not().isEmpty()
    .withMessage('Provide a mode.')
    .isLength({ max: 50 })    
    .trim()
    .escape(),
];

const photoArray = [
  body('title')
    .not().isEmpty()
    .withMessage('Provide a title.')
    .isLength({ max: 50 })
    .trim()
    .escape(),
  body('work')
    .not().isEmpty()
    .withMessage('Provide a work.')
    .custom(workID => {
      // check if id is valid
      if(!mongoose.Types.ObjectId.isValid(workID)) {
        throw new Error ('Work id NOT valid')
      }
      //check if work exists
      return Work.findById(workID).then(work => {
        if(!work) {
          return Promise.reject('Work does NOT exist.')
        }
        return true;
      })
    })  
    .trim()
];

module.exports = {
  workArray,
  photoArray
}