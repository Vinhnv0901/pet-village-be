const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSearchProduct,
  getPropProduct,
} = require("../controllers/product.controller.js");

//**GET */
router.get("/", getProducts);
router.get("/search/:prop", getSearchProduct);
router.get("/:id([0-9a-fA-F]{24})", getProduct);

router.get("/:prop1/:prop2?/:prop3?", getPropProduct);
//**Create */

router.post("/", createProduct);

//**Update */
router.put("/:id", updateProduct);

//**Delete */
router.delete("/:id", deleteProduct);

module.exports = router;
