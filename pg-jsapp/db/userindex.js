const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const conString = `postgres://${process.env.PGUSER}:@${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/YourDatabaseName`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : conString,
});
module.export = { pool };
