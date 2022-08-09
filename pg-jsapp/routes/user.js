import express from "express";
import { fetchUser } from "../controller/userController.js";
import { body, validationResult } from "express-validator";
const route = express.Router();

route.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    // 1.a not exists > continue with the flow

    //console.log("fetch user", _fetchUser);
    // res.send(_fetchUser);
    const inputData = {
      firstname: req.body.first_name,
      lastname: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const _fetchUser = await fetchUser(req.body.email);
      console.log(_fetchUser);

      if ((_fetchUser.length = 0)) {
        throw new TypeError(`e-mail address too short`);
      } else {
        console.error("change email, incorrect email");
      }
      if (_fetchUser < 2) {
        throw new TypeError(`e-mail address too short`);
      }
      // *fetch to check if email of user exists
      // 1. exist > res.send("already exists")
      // ** hit create api in controller to CREATE user with req.body before checking empty etc
      // 1. res.send({status:200,message:"User create"})
    }
  }
);

export default route;
