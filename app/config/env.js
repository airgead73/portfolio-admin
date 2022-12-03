/* GENERAL ENVIRONMENT */
const isDev = process.env.NODE_ENV === 'development';

/* AUTH */
const authSecret = process.env.AUTH_SECRET;
const baseURL = process.env.BASE_URL;
const clientID = process.env.CLIENT_ID;
const issuerURL = process.env.ISSUER_BASE_URL;

/* DB */
const mongoURI = process.env.MONGO_URI + process.env.MONGO_DBNAME;

/* Check Variables */
if(!authSecret) {
  throw new Error('.env is missing the definition of AUTH_SECRET environment variable.');
}

if(!baseURL) {
  throw new Error('.env is missing the definition of BASE_URL environment variable.');
}

if(!clientID) {
  throw new Error('.env is missing the definition of CLIENT_ID environment variable.');
}

if(!issuerURL) {
  throw new Error('.env is missing the definition of ISSUER_BASE_URL environment variable.');
}

if(!mongoURI) {
  throw new Error('.env is missing the definition of MONGO_URI or MONGO_DBNAME environment variable.');
}

/* export */
module.exports = {
  authSecret,
  baseURL,
  clientID,
  isDev,
  issuerURL,
  mongoURI,
}