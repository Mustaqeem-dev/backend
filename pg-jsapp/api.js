// const client = require("./connection.js");
import express from "express";
const app = express();

// This will be undefined since the property on pg is "Client" no "pgClient"
import pg from "pg";
// require('dotenv').config();
const Client = pg.Client;
app.use(express.json());
console.log(Client);

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Mustaqeem1!",
  database: "new_database",
});

app.listen(3006, () => {
  console.log("Sever is now listening at port 3000", process.env.PGUSER);
});

client
  .connect()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/users", (req, res) => {
  console.log("here");

  client.query(
    "SELECT id, firstname, lastname, password, email FROM public.users;",
    (err, ressult) => {
      if (err) throw err;
      console.log(res);
      res.send(ressult.rows);
      client.end();
    }
  );
});

app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from users where id=${req.params.id}`,
    (err, result) => {
      if (err) throw err;
      console.log(res);
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});
import bodyParser from "body-parser";
app.use(bodyParser.json());

app.post("/insert", (req, res) => {
  const user = req.body;
  console.log("body here", user);
  let insertQuery = `insert into users(id, firstname, lastname, location) 
                     values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (result) {
      res.send("Insertion was successful");
    } else {
      console.error(err.message);
      res.send(err);
    }
  });
  client.end;
});

//update

app.put("/users/:id", (req, res) => {
  let user = req.body;
  console.log("body here", user);
  let updateQuery = `update users
                     set firstname = '${user.firstname}',
                     lastname = '${user.lastname}',
                     location = '${user.location}'
                     where id = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (result) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
      res.send(err);
    }
  });
  client.end;
});

//delete

app.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from users where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (result) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

export default Client;
