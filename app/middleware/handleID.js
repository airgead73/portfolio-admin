const mongoose = require('mongoose');

const handleID = ($model) => async (req, res, next) => {

  // check if id is valid

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {

    return res
      .status(400)
      .json({
        success: false,
        message: 'ID is not valid.'
      });

  }

  // check if item exists

  const data = await $model.findById(id);

  if(!data) {
    return res
      .status(401)
      .json({
        success: false,
        message: 'Item is not found.'
      });
  }

  res.data = data;
  res.id = id;

  next();

}

module.exports = handleID;