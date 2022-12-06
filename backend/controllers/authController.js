const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

// Register a user => localhost:4000/api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("Email has already exist", 400));
  }
  const newUser = await User.create({ name, email, password });

  // sendToken(user, 200, res);
  res.status(200).json({
    success: true,
    user: newUser,
  });
});

// Login user => localhost:4000/api/v1//login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is entered
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  // Finding user in database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // Checks if password is correct
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res);
});

// Logout user => localhost:4000/api/v1//logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out",
  });
});
