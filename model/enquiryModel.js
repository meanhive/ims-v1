const mongoose = require('mongoose');

const Enquiry = new mongoose.Schema({
    enquiryId: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    father: {
        type: String,
        required: true
    },
    mother: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    collection: "enquiry",
    timestamps: true
});

module.exports = mongoose.model("Enquiry", Enquiry);
