const checkAuthClient = function(req, res, next) {
  const { isAuthenticated } = res.locals;

  console.log('check auth client')

  if(isAuthenticated) {
    console.log('is authenticated')
    return next();
  } else {
    console.log('is not authenticated')
    return res.status(401).redirect('/login');
  }

}

module.exports = checkAuthClient;