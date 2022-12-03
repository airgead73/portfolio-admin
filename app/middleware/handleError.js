const handleError = (err, req, res, next) => {
  let status;
  if(!err.status) {
    status = 500;
  } else {
    status = err.status;
  }

  const isApi = (req.path).includes('api');

  if(isApi) {
    return res.status(status)
      .json({
        success:false,
        message: err.message
      });
  } else {
    return res.status(status)
      .render('template', {
        success: false,
        pagePath:'./pages/error',
        title: `Error ${status}`,
        heading: `Error ${status}`,
        message: err.message
      });     
  }
  
}

module.exports = handleError;