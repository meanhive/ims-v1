const mongoose = require('mongoose');

const Batch = new mongoose.Schema({}, {
    collection: "batch",
    timestamps: true
});

module.exports = mongoose.model("Batch", Batch);
