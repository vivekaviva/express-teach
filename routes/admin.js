const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // res.send(
  //   "<form action='/store-product' method='POST'><input type='text' placeholder='Enter the product name' name='product'/><input type='text' placeholder='Enter the name' name='name'/> <input type='submit' value='send' /></form>"
  // );
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/store-product", (req, res, next) => {
  // console.log("product", req);
  console.log("product", req.body);
  res.status(200).send(`
    <p>Product is ${req.body.productCategory} and name is ${req.body.productName}</p>
    <button onclick="window.location.href='/admin/add-product'" >Back</button>
    `);
});

module.exports = router;
