const mongoose = require('mongoose');

const Enquiry = new mongoose.Schema({}, {
    collection: "enquiry",
    timestamps: true
});

module.exports = mongoose.model("Enquiry", Enquiry);
