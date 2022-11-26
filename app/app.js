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
const { handleError } = require('./middleware');
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

app.use(handleError);
/**
 * export app
 */
module.exports = app;
