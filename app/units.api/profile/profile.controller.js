/**
 * @desc Create profile 
 * @route POST - /profile
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {
    res.status(200).send('API create profile.');
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Read profile
 * @route GET - /profile
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {
    res.status(200).send('API read profile.');
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Update profile 
 * @route PATCH - /profile
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {
    res.status(200).send('API update profile.');
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Delete profile 
 * @route DELETE - /profile
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {
    res.status(200).send('API delete profile.');
  } catch(err) {
    next(err);
  }

 }