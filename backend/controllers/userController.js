const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Get all user => /api/v1/admin/users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Update user => /api/v1/admin/user/:id
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidation: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

//Delete user => /api/v1/admin/user/:id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  await user.remove();
  res.status(200).json({
    success: true,
    message: "User successfully removed",
  });
});

// Get single user => /api/v1/admin/user/:id
exports.getAdminUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});
