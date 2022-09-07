const mongoose = require('mongoose');

const Fee = new mongoose.Schema({}, {
    collection: "fee",
    timestamps: true
});

module.exports = mongoose.model("Fee", Fee);
