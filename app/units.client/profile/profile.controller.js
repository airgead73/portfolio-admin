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
 * @desc profile update view
 * @route GET - /profiles/update
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT update profile view.');

  } catch(err) {

    next(err);

  }

 } 
/**
 * @desc profile delete view
 * @route GET - /profiles/delete
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {

    res.status(200).send('CLIENT delete profile view.');

  } catch(err) {

    next(err);

  }

 } 
