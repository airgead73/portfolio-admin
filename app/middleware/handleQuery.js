const handleQuery = ($model, $populate) => async (req, res, next) => {

  /**
   * @todo add pagination
   */

  let query;

  const reqQuery = {...req.query}; 

  const removeFields = ['select', 'sort', 'page', 'limit'];

  removeFields.forEach(param => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  query = $model.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields)
  }

  // sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
  } else {
    query = query.sort('lname')
  }

  // pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 50;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await $model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // populate
  if($populate) {
    query = query.populate($populate);
  }

  // execute query
  const results = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.previoous = {
        page: page - 1,
        limit
      };
    }

  res.results = {
    success: true,
    count: results.length,
    pagination,
    data: results
  };

  next();

}

module.exports = handleQuery;