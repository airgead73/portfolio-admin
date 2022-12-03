const checkAuthClient = require('./handleAuth');
const checkMethod = require('./checkMethod');
const handleError = require('./handleError');
const handleID = require('./handleID');
const handleQuery = require('./handleQuery');

module.exports = {
  checkAuthClient,
  checkMethod,
  handleError,
  handleID,
  handleQuery
}