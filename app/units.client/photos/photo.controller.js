/**
 * @desc photo create view
 * @route GET - /photos/add
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT photo create view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc photo read view
 * @route GET - /photos
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT photo read view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc photo detail view
 * @route GET - /photos/:id
 * @access Private
 * */
 exports.detail = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT photo detail view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc photo update view
 * @route GET - /photos/:id/update
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT photo update view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc photo delete view
 * @route GET - /photos/:id/delete
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT photo delete view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc photo drop view
 * @route GET - /photos/drop
 * @access Private
 * */
 exports.drop = async(req,res,next) => {

  try {

    res.status(200).send(`CLIENT photo detail view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 