const { Product } = require("../models");

//**GET */
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

const getDogProduct = async (req, res) => {
  try {
    const products = await Product.find(
      { species: { $in: "dog" } },
      { species: 1 }
    );

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

const getProduct = async (req, res) => {
  //how get id of item
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Post */

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Update */

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    //recheck updated items
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Delete */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getDogProduct,
};

///số lượng bán được của một sản phẩn
///số phản phẩm còn lại
///cập nhật sau một lần có giao dịch
