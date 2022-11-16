const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        default: 0,
    },
    images: [
        {
            url: { type: String, required: true },
        },
    ],
    category: {
        type: String,
        required: [true, 'Please enter product category'],
        enum: {
            values: [
                'Quan ao the thao',
                'Quan ao bong da',
                'Quan ao bong chuyen',
                'Trang phuc chay bo',
                'Phu kien the thao',
                'Do CLB - Doi tuyen',
            ],
        },
    },
    amount: { type: Number, required: true, default: 0 },
    colors: [
        {
            type: String,
        },
    ],
    slug: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Product', productSchema);
