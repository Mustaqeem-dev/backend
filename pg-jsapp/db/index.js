const pgp = require("pg-promise")();

const connectionString =
  "postgresql://postgres:process.env.REACT_APP_PASSWORDlocalhost: {process.env.REACT_APP_SECRET_KEY}";

const db = pgp(connectionString);
module.exports = db;