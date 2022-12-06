const express = require("express");
const router = express.Router();
const {
  getAllMessages,
  getSingleMessage,
  createMessage,
  deleteMessage,
  updateMessage,
} = require("../controllers/messageController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/messages").get(getAllMessages);
router
  .route("/message/:id")
  .get(getSingleMessage)
  .delete(deleteMessage)
  .put(updateMessage);
router.route("/message/new").post(createMessage);

module.exports = router;
