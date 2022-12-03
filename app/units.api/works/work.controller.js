const Work = require('./work');
/**
 * @desc Create work 
 * @route POST - /works
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

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

    const works = await Work.find().sort('-title');

    res.status(200)
    .json({
      success: true,
      message: 'List of works.',
      count: works.length,
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
    const work = res.data;
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
    const updatedWork = await Work.findOneAndUpdate(res.id, req.body, { new: true, runValidators: true });
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