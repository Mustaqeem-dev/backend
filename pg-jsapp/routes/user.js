import express from "express";
import { fetchUser, createUser } from "../controller/userController.js";
import { body, validationResult } from "express-validator";
const route = express.Router();

route.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const _fetchUser = await fetchUser(req.body.email);
      console.log(_fetchUser);
      if (_fetchUser.length === 0) {
        const newUser = await createUser(req.body);
        if (newUser && newUser.rowCount === 1) {
          res.send({ statusCode: 201, message: "SUCCESS" });
        } else {
          res.send({ statusCode: 503, message: "UNABLE TO INSERT INTO DB" });
        }
      } else {
        res.send({ statusCode: 305, message: "EMAIL ALREADY EXISTS" });
      }
    }
  }
);

export default route;
