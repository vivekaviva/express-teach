const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");

const adminRouter = require("./routes/admin");
const welcomeRouter = require("./routes/welcome");

app.use(bodyParser.urlencoded());

app.use("/admin", adminRouter);
app.use(welcomeRouter);

const hbs = exphbs.create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "view/layouts"),
});

// app.set("handlebars", hbs.engine);
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(path.join(__dirname, "public")));

app.get("/newPugPage", (req, res) => {
  res.render("index", {
    title: "Home",
    items: ["Item 1", "Item 2", "Item 3"],
    message: "Hello",
  });
});

app.get("/newPage", (req, res) => {
  res.render("index", {
    title: "Students",
    para: "This is a sample text",
    items: ["Student 1", "Student 2", "Student 3"],
    message: "Hello",
  });
});

app.get("/newProductPage", (req, res) => {
  res.render("index", {
    title: "Products",
    para: "This is a sample text",
    items: ["Product 1", "Product 2", "Product 3"],
    message: "Hello",
  });
});

app.get("/newHandlebarsPage", (req, res) => {
  res.render("index", { title: "Home", items: ["Item 1", "Item 2", "Item 3"] });
});

var items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 1",
  "Item 2",
  "Item 3",
];

app.get("/homeEjsPage", (req, res) => {
  res.render("home", {
    title: "Home Ejs Page",
  });
  // res.render("index");
});

app.get("/aboutEjsPage", (req, res) => {
  res.render("about", {
    title: "About Ejs Page",
  });
  // res.render("index");
});

// app.get("/newHandlebarsPage", (req, res) => {
//   res.render("index", {
//     layout: false, // Disable layout
//     title: "Home",
//     items: ["Item 1", "Item 2", "Item 3"],
//   });
// });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(3000);
