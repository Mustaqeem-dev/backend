import express from "express";
import { fetchUser } from "../controller/userController.js";

const route = express.Router();

route.post("/signup", async (req, res) => {
  const _fetchUser = await fetchUser();
  console.log("fetch user", _fetchUser);
  // res.send(_fetchUser.rows);
});

export default route;
