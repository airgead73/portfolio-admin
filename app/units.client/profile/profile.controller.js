/**
 * @desc profile create view
 * @route GET - /profiles/add
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT profile create view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile read view
 * @route GET - /profiles
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT profile read view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile detail view
 * @route GET - /profiles/:id
 * @access Private
 * */
 exports.detail = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT profile detail view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile update view
 * @route GET - /profiles/:id/update
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT profile update view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile delete view
 * @route GET - /profiles/:id/delete
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {

    const { id } = req.params;
    res.status(200).send(`CLIENT profile delete view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile drop view
 * @route GET - /profiles/drop
 * @access Private
 * */
 exports.drop = async(req,res,next) => {

  try {

    res.status(200).send(`CLIENT profile detail view: ${id}.`);

  } catch(err) {

    next(err);

  }

 } 