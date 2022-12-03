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
        message: `API new work created: ${work.title}.`,
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
      message: 'API list of works.',
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
    const { id } = req.params;
    const work = await Work.find({ _id: id });
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
    
    await Work.collection.drop();

    res.status(200)
      .json({
        success: true,
        message: 'API drop work collection.'
      });

  } catch(err) {
    next(err);
  }

 }