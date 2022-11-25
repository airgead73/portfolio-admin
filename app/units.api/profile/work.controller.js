/**
 * @desc Create work 
 * @route POST - /works
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {
    res.status(200).send('API create works.');
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Read works
 * @route GET - /works
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {
    res.status(200).send('API read works.');
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Read detail 
 * @route GET - /works/:id
 * @access Private
 * */
 exports.detail = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API read work detail: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Update work 
 * @route PATCH - /works/:id
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API update work: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Delete work 
 * @route DELETE - /works/:id
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API delete work: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Drop work 
 * @route DELETE - /works
 * @access Private
 * */
 exports.drop = async(req,res,next) => {

  try {
    res.status(200).send('API drop work collection.');
  } catch(err) {
    next(err);
  }

 }