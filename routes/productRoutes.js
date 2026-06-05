const express = require("express");

const router = express.Router();

const {
  getProducts,
  addProduct,
  getProductById,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);

module.exports = router;