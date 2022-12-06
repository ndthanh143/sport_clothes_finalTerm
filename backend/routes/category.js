const express = require("express");
const {
  getCategory,
  createCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.route("/categories").get(getCategory);
router.route("/category/new").post(createCategory);

module.exports = router;
