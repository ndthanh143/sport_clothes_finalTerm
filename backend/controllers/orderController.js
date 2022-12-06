const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create a new order => localhost:4000/api/v1//order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    shippingPrice,
    totalPrice,
    paymentInfo,
    user,
  } = req.body;
  const order = await Order.create({
    orderItems,
    shippingInfo,
    // shippingPrice,
    totalPrice,
    paymentInfo,
    user,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

// Get all orders => /api/v1/admin/orders
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// Get single order => /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("No Order found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// Get logged in user order => /api/v1/orders/me
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// Update / Process order - Admin => /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  let order = await Order.findById(req.params.id);

  //   if (order.orderStatus === "Delivered") {
  //     return next(
  //       new ErrorHandler("Đơn hàng đã được giao nhận thành công!", 400)
  //     );
  //   }

  //   order.orderItems.forEach(async (item) => {
  //     await updateStock(item.product, item.quantity);
  //   });

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidation: true,
    useFindAndModify: false,
  });

  if (order.orderStatus === "Đã giao hàng") {
    order.deliveredAt = Date.now();
  }

  await order.save();

  res.status(200).json({
    success: true,
    order,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.amount = product.amount - quantity;

  await product.save({ validateBeforeSave: false });
}

// delete order => /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("No order found with this ID", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});
