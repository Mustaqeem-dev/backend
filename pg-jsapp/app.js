const express = require("express");
const port = 3000;
const app = express();
const db = require("./db");

app.use(express.json());
const customersRouter = require("./routes/customer");
app.use("/customers", customersRouter);
app.listen(port, () =>
  console.log("server running at http://localhost:${port}")
);
