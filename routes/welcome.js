const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`Welcome page`);
});

router.get("/welcome", (req, res, next) => {
  res.send(`Welcome page`);
});

module.exports = router;
