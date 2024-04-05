const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getDogProduct,
} = require("../controllers/product.controller.js");

//**GET */
router.get("/", getProducts);
router.get("/dog", getDogProduct);
router.get("/:id", getProduct);

//**Create */

router.post("/", createProduct);

//**Update */
router.put("/:id", updateProduct);

//**Delete */
router.delete("/:id", deleteProduct);

module.exports = router;
