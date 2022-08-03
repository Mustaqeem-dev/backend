import express from "express";
const router = express.Router();
import { fetchCustomers } from "../controller/controller.customer.js"


router.get("/", (req, res) => {
  const customerData = fetchCustomers();
  res.send(customerData);
});

export default router;
