const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeature = require("../utils/apiFeatures");

// Create new product => localhost:4000/api/v1//admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get all products => localhost:4000/api/v1//products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 8;
  // const productsCount = await Product.countDocuments();

  const apiTogetProductBeforePagination = new APIFeature(
    Product.find(),
    req.query
  ).filter();
  const totalProductsFind = await apiTogetProductBeforePagination.query;

  const apiFeatures = new APIFeature(Product.find(), req.query)
    .filter()
    .pagination(resPerPage);
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: products.length,
    productsCount: totalProductsFind.length,
    resPerPage,
    products,
  });
});
// Get admin products => /api/v1/admin/products
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});
// Get product search
exports.getProductSearch = catchAsyncErrors(async (req, res, next) => {
  const apiFeatures = new APIFeature(Product.find(), req.query).search();
  const productSearch = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: productSearch.length,
    productSearch,
  });
});

// Get single product details => localhost:4000/api/v1//product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product => localhost:4000/api/v1//admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidation: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product => localhost:4000/api/v1//admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product successfully removed",
  });
});
