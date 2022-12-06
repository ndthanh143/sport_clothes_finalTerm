const express = require("express");
const router = express.Router();

const {
  getUserProfile,
  getAllUsers,
  deleteUser,
  updateUser,
  getAdminUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// router
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/admin/users").get(getAllUsers);
router
  .route("/admin/user/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminUser);

module.exports = router;
