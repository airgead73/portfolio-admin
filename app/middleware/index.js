const checkAuthClient = require('./handleAuth');
const checkMethod = require('./checkMethod');
const handleError = require('./handleError');
const handleID = require('./handleID');

module.exports = {
  checkAuthClient,
  checkMethod,
  handleError,
  handleID
}