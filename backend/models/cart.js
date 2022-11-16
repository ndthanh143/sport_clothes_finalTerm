const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
            quantity: { type: Number, required: true },
        },
    ],
});

module.exports = mongoose.model('Cart', cartSchema);
