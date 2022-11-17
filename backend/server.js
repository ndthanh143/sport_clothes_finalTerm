const express = require('express');
const app = require('./app');
const connectDatabase = require('./config/database');
const path = require('path');

const dotenv = require('dotenv');


// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down server due to uncaught exception');
    process.exit(1);
});

//Setting up config file
dotenv.config({ path: 'backend/config/config.env' });


// Connecting to database
connectDatabase();

// if (process.env.NODE_ENV == 'PRODUCTION') {
    
//     app.get('*', (req, res) => {
//         app.use(express.static(path.join(__dirname, '../frontend/build')));
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
//     });
// }

const server = app.listen(process.env.PORT, () => {
    console.log(`Server start on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled Promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    });
});

