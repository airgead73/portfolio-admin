/**
 * @desc work create view
 * @route GET - /works/add
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/add',
        title: 'add work',
        heading: 'add work'
      });

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

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/index',
        title: 'works',
        heading: 'works'
      });

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

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/detail',
        title: `work ${id}`,
        heading: 'work detail'
      });
      
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

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/update',
        title: `update ${id}`,
        heading: 'work update'
      });
    

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

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/remove',
        title: `delete ${id}`,
        heading: 'work delete'
      });
    

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


    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/works/drop',
        title: 'drop works',
        heading: 'work drop'
      });
    

  } catch(err) {

    next(err);

  }

 } 