const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    cryptoId: {
        type: String
    },
    priceThreshold: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('alerts', 'alertSchema');