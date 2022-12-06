const Category = require("../models/category");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.getCategory = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    categories,
  });
});

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  const category = await Category.findOne({ name });
  if (category) {
    return next(new ErrorHandler("This category has been exist", 400));
  }

  const newCategory = await Category.create({ name: name });
  res.status(200).json({ success: true, category: newCategory });
});

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("Category not found", 404));
  }

  await category.remove();
  res.status(200).json({
    success: true,
    message: "Category successfully removed",
  });
});
