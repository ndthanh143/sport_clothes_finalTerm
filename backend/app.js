const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errors");
const path = require("path");
// app.use(()=>(req,res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
//     next();
// })

const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }, { limit: "50mb" }));
app.use(cookieParser());
// Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");
const user = require("./routes/user");
const category = require("./routes/category");
const message = require("./routes/message");

app.use("/api/v1/", auth);
app.use("/api/v1/", products);
app.use("/api/v1/", order);
app.use("/api/v1/", user);
app.use("/api/v1", category);
app.use("/api/v1", message);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
