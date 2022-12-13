const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const { check, body } = require("express-validator");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  body("title").isString().isAlphanumeric().isLength({ min: 2 }).trim(),
  body("price").isFloat(),
  body("description").isLength({ min: 5, max: 400 }).trim(),
  adminController.postAddProduct
);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post(
  "/edit-product",
  body("title").isString().isAlphanumeric().isLength({ min: 3 }).trim(),
  body("price").isFloat(),
  body("description").isLength({ min: 5, max: 400 }).trim(),
  adminController.postEditProduct
);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
