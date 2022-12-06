const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true, default: "Chưa giải quyết" },
});

module.exports = mongoose.model("Message", messageSchema);
