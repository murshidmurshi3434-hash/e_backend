const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// GET SINGLE PRODUCT
const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ADD PRODUCT
const addProduct = async (req, res) => {

  try {

    const { name, price, image, description } = req.body;

    const product = await Product.create({
      name,
      price,
      image,
      description,
    });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};