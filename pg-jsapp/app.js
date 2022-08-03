import express from "express";
import customersRouter from "./routes/customer.js";
const app = express();


app.use(express.json());
app.use("/customers", customersRouter);

app.get('/test', (req, res) => {
  console.log('hello')
  res.send('hello')
})
const port = 3000;

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
