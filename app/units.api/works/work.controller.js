const Work = require('./work');
/**
 * @desc Create work 
 * @route POST - /works
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

    const work = new Work(req.body);
    await work.save();

    res.status(200)
      .json({
        success: true,
        message: `${work.title} successfully created.`,
        data: work
      });

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

    const { success, count, pagination, data: works } = res.results;

    if(!success) {
      const error = new Error('Something went wrong.');
      error.status(500);
      return next(err);
    }

    res.status(200)
    .json({
      success,
      message: 'List of works.',
      count,
      pagination,
      data: works
    });

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
    const { item: work } = res.data;
    res.status(200).json({ success: true, message: 'work found.', data: work });
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
    const updatedWork = await Work.findByIdAndUpdate(res.data.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, message: `${updatedWork.title} successfully updated.`, data: updatedWork });
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
    const work = res.data;
    work.remove();
    res.status(200).json({ success: true, message: `${work.title} successfully deleted.`});
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
    
    await Work.collection.drop();

    res.status(200)
      .json({
        success: true,
        message: 'Work collection successfully dropped.'
      });

  } catch(err) {
    next(err);
  }

 }