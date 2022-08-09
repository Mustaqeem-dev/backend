import client from "../db/index.js";

export const fetchUser = async (email) => {
  return await client
    .query(
      `SELECT id, firstname, lastname, password, email FROM public.users WHERE email = '${email}';`
    )
    .then((data) => {
      return data.rows || [];
    })
    .catch((error) => {
      console.error(error);
    });
};

// app.get("/users", (req, res) => {
//   console.log("here");
//   const userData = fetchUser();
//   res.send(userData);

//   client.query(
//     "SELECT id, firstname, lastname, password, email FROM public.users;",
//     (err, ressult) => {
//       if (err) throw err;
//       console.log(res);
//       res.send(ressult.rows);
//       client.end();
//     }
//   );
// });

// app.put("/users/:id", (req, res) => {
//   let user = req.body;
//   let updateQuery = `update users
//                      set firstname = '${user.firstname}',
//                      lastname = '${user.lastname}',
//                      location = '${user.location}'
//                      where id = ${user.id}`;

//   client.query(updateQuery, (err, result) => {
//     if (!err) {
//       res.send("Update was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
// });

// app.delete("/users/:id", (req, res) => {
//   let insertQuery = `delete from users where id=${req.params.id}`;

//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send("Deletion was successful");
//     } else {
//       console.log(err.message);
//     }
//   });
// });
