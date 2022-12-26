const Photo = require('./photo');
/**
 * @desc Create photo 
 * @route POST - /photos
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    const { success, errors } = res.val_results;

    if(!success) {
      const { errors: responseErrors } = errors;
      return res
        .status(400)
        .json({
          success: false,
          message: 'Error: something went wrong.',
          errors: responseErrors
        });
    }    

    const photo = new Photo(req.body);
    await photo.save();

    res.status(200)
      .json({
        success: true,
        message: `${photo.title} successfully created.`,
        data: photo
      });

  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Read photos
 * @route GET - /photos
 * @access Private
 * */
 exports.read = async(req,res,next) => {

  try {
    const { success, count, pagination, data: photos } = res.results;
    res.status(200)
    .json({
      success,
      message: 'List of photos.',
      count,
      pagination,
      data: photos
    });
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Read detail 
 * @route GET - /photos/:id
 * @access Private
 * */
 exports.detail = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API read photo detail: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Update photo 
 * @route PATCH - /photos/:id
 * @access Private
 * */
 exports.update = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API update photo: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Delete photo 
 * @route DELETE - /photos/:id
 * @access Private
 * */
 exports.remove = async(req,res,next) => {

  try {
    const { id } = req.params;
    res.status(200).send(`API delete photo: ${id}.`);
  } catch(err) {
    next(err);
  }

 }
/**
 * @desc Drop photo 
 * @route DELETE - /photos
 * @access Private
 * */
 exports.drop = async(req,res,next) => {

  try {
    res.status(200).send('API drop photo collection.');
  } catch(err) {
    next(err);
  }

 }