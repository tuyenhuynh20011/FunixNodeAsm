const express = require("express");

const rootDir= require('../util/path')

const path = require("path");
const router = express.Router();
router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
