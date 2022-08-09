import db from "../db/index.js";

export const fetchuser = () => {
  db.any("SELECTid, firstname, lastname, password, email FROM users")
    .then((row) => {
      return row;
    })
    .catch((error) => {
      console.log(error);
    });
};
