const client = require("./databasepg.js");
const express = require("express");
const app = express();

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});

app.get("/customers", (req, res) => {
  client.query(`Select * from customers`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});
