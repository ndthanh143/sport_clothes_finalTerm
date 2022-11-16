const express = require('express');
const router = express.Router();

const { getUserProfile, getAllUsers, deleteUser, updateUser } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// router.route('/me').get(isAuthenticatedUser, getUserProfile);
// router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers);

// router
router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/admin/users').get(getAllUsers);
router.route('/admin/user/:id').delete(deleteUser).put(updateUser);

module.exports = router;
