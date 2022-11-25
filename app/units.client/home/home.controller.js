/**
 * @desc Dashboard view
 * @route GET - /
 * @access Private
 * */
 exports.read = async(req, res, next) => {

  try {

    res.status(200).send('CLIENT dashboard');

  } catch(err) {
    next(err);
  }

 }