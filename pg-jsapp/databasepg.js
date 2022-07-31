const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Mustaqeem1!",
  database: "PostgreSQL@14",
});

client.connect();
client.query("Select * from customers", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
module.exports = client;
