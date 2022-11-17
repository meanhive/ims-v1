const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    enrolmentId: {
        type: String,
        unique: true
    },
    course: {
        type: String
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
    emergencyMobile: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    zipcode: {
        type: Number,
    },
    photo: {
        type: Object,
        default: {
            url: ""
        }
    },
    signature: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    fee: {
        type: Number,
        default: 0
    }
}, {
    collection: "student",
    timestamps: true
});

module.exports = mongoose.model("Student", Student);
