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
const clientRouter = require('./units.client/router');
const apiRouter = require('./units.api/router');
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
app.use('/', clientRouter);
app.use('/api', apiRouter);
/**
 * error handling
 */
app.use('*', function(req, res, next) {
  const error = new Error('Page not Found.');
  error.status = 401;
  next(error);
});

app.use(function(err, req, res, next) {
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
        success: false,
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

  // return res.status(status)
  //   .render('template', {
  //     success: false,
  //     pagePath:'./pages/error',
  //     title: `Error ${status}`,
  //     heading: `Error ${status}`,
  //     message: err.message
  //   })

});
/**
 * export app
 */
module.exports = app;
