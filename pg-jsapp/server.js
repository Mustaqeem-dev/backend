import express from "express";
import pg from "pg";

const Client = pg.Client;
const app = express();

import userRoute from "./routes/user.js ";

app.use(express.json());

app.listen(3006, () => {
  console.log("Sever is now listening at port 3006");
});

app.use("/user", userRoute);

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
  let insertQuery = `insert into users(id, firstname, lastname, password, email) 
                     values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.password}','${user.email}')`;

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
                     password= '${user.password}',
                     email='${user.email}'                
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
