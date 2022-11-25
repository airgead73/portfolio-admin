/**
 * @desc profile create view
 * @route GET - /profiles/add
 * @access Private
 * */
 exports.create = async(req,res,next) => {

  try {

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/profile/add',
        title: 'profile',
        heading: 'profile'
      });

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

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/profile/index',
        title: 'profile',
        heading: 'profile'
      });

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

    return res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/profile/udpate',
      title: 'update profile',
      heading: 'update profile'
    });

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

    return res.status(200)
    .render('template', {
      success: true,
      pagePath: './pages/profile/remove',
      title: 'remove profile',
      heading: 'remove profile'
    });

  } catch(err) {

    next(err);

  }

 } 
