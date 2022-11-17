const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');
const path = require('path');

const cors = require('cors');
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus:200,
    'Access-Control-Allow-Origin': "*"
    // AccessControlAllowCredentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }, { limit: '50mb' }));
app.use(cookieParser());
// Import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const user = require('./routes/user');

app.get('/' , (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
})
app.use('/api/v1/', products);
app.use('/api/v1/', auth);
app.use('/api/v1/', order);
app.use('/api/v1/', user);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
