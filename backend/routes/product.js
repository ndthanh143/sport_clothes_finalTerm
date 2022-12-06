const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductSearch,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAdminProducts,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/productSearch").get(getProductSearch);

router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
