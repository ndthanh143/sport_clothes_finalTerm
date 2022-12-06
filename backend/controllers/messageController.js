const Message = require("../models/message");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();

  res.status(200).json({
    success: true,
    messages,
  });
});

exports.createMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderInfo, title, content } = req.body;

  const message = await Message.create({
    senderInfo: senderInfo,
    title: title,
    content: content,
  });

  res.status(200).json({ success: true, message: message });
});

exports.deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return next(new ErrorHandler("Message not found", 404));
  }

  await message.remove();
  res.status(200).json({
    success: true,
    message: "Message successfully removed",
  });
});

exports.getSingleMessage = catchAsyncErrors(async (req, res, next) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return next(new ErrorHandler("Message not found", 404));
  }

  res.status(200).json({
    success: true,
    message,
  });
});

exports.updateMessage = catchAsyncErrors(async (req, res, next) => {
  let message = await Message.findById(req.params.id);

  if (!message) {
    return res.status(404).json({
      success: false,
      message: "Message not found",
    });
  }

  message = await Message.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidation: true,
    useFindAndModify: false,
  });

  await message.save();

  res.status(200).json({
    success: true,
    message,
  });
});
