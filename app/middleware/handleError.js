const handleError = (err, req, res, next) => {
  let status;
  if(!err.status) {
    status = 500;
  } else {
    status = err.status;
  }

  const isApi = (req.path).includes('api');

  if(isApi) {
    console.log('This is an api route.');
  } else {
    console.log('This is a client route.');
  }

  return res.status(status)
  .render('template', {
    success: false,
    pagePath:'./pages/error',
    title: `Error ${status}`,
    heading: `Error ${status}`,
    message: err.message
  }); 

}

module.exports = handleError;