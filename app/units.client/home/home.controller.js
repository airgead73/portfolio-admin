/**
 * @desc Dashboard view
 * @route GET - /
 * @access Private
 * */
 exports.read = async(req, res, next) => {

  try {

    return res.status(200)
      .render('template', {
        success: true,
        pagePath: './pages/dashboard/index',
        title: 'portfolio',
        heading: 'portfolio'
      });

  } catch(err) {
    next(err);
  }

 }