const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRouter = require("./routes/admin");
const welcomeRouter = require("./routes/welcome");

app.use(bodyParser.urlencoded());

app.use("/admin", adminRouter);
app.use(welcomeRouter);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
