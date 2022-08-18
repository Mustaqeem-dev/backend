import pg from "pg";

const conString = `postgres://postgres:Mustaqeem1!@localhost:5432/new_database`;

var client = new pg.Client(conString);
client
  .connect()
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.error(err);
  });

export default client;
