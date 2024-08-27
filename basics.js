// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("First Express page");
//   res.end();
// });
const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.send("<p>Hello from Express!</p>");
});

app.use((req, res, next) => {
  console.log("First Middleware !");
  next();
});

app.use((req, res, next) => {
  console.log("second Middleware !");
  next();
});

app.use((req, res, next) => {
  console.log("Third Middleware !");
  res.send("<p>Hello from express</p>");
});

app.use("/second", (req, res, next) => {
  console.log("Second Page");
  res.send("Second page");
});

app.use("/", (req, res, next) => {
  console.log("First Page");
  res.send("First page");
  next();
});
// const server = http.createServer(app);

// server.listen(3000);
