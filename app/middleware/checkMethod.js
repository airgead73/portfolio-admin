const checkMethod = ($method) => (req, res, next) => {

if(req.method !== $method) {

  const error = new Error('Invalid request method.');
  error.status = 400;

  return next(error);

}

next();


}

module.exports = checkMethod;