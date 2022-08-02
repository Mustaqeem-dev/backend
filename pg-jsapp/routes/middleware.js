const express = require("express");
const app = express();
//using middleware globallly
// imp not keep order check
app.use(middleware1);
app.use(middleware2);

//midlleware1
function middleware1(req, res, next) {
  req.customProperty = 100;
  console.log("hi i am middleware1");
  next();
}
//2
function middleware2(req, res, next) {
  console.log("i am middleware#2 AND CUSTOM PROP VALUE IS{}");
  const errobj = new Error("im new error");
  next(errobj);
}

//error handler
function errorhandler(err, req, res, next) {
  res.json({ err: err });
}
//getting midleware as para
app.get("/", (req, res, next) => {
  console.log("standard output");
  res.send("<h1>hellow world</h1>");
});

//calling at the becuz error will pass directly to error handler if any err  in any middleware
app.use(errorhandler);
app.listen(3000);
