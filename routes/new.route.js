const express = require("express");
const router = express.Router();
const {
  getNews,
  getNew,
  createNew,
  updateNew,
  deleteNew,
} = require("../controllers/new.controller.js");

//**GET */
router.get("/", getNews);

router.get("/:id", getNew);

//**Create */

router.post("/", createNew);

//**Update */
router.put("/:id", updateNew);

//**Delete */
router.delete("/:id", deleteNew);

module.exports = router;
