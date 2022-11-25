/**
 * @desc work create view
 * @route GET - /works/add
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT work create view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc work read view
 * @route GET - /works
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT work read view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc work detail view
 * @route GET - /works/:id
 * @access Private
 * */
 exports.detail = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT work detail view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc work update view
 * @route GET - /works/:id/update
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT work update view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc work delete view
 * @route GET - /works/:id/delete
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT work delete view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc work drop view
 * @route GET - /works/drop
 * @access Private
 * */
 exports.drop = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT drop work collection.');

  } catch(err) {

    next(err);

  }

 } 