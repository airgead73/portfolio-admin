/**
 * external imports
 */
const express = require('express');
const { auth } = require('express-openid-connect');
const path = require('path');
const cookieParser = require('cookie-parser');
/**
 * internal imports
 */
const { isDev } = require('./config/env');
const { authConfig } = require('./config');
const { checkAuthClient, checkMethod } = require('./middleware');
/**
 * app activation
 */
const app = express();
app.use(auth(authConfig));
/**
 * middleware
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/**
 * locals
 */
app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  next();
});
/**
 * routes
 */
app.get('/', checkAuthClient, checkMethod('POST'), (req, res, next) => {
  res.status(200).send('CLIENT home page');
});
/**
 * error handling
 */
app.use('*', function(req, res, next) {
  const error = new Error('path not found.');
  next(error);
});

app.use(function(err, req, res, next) {
  let status;
  if(!err.status) {
    status = 500;
  } else {
    status = err.status;
  }

  res.status(status).send(`ERROR: ${err.message}`);

});
/**
 * export app
 */
module.exports = app;
