const mongoose = require('mongoose');

const Student = new mongoose.Schema({}, {
    collection: "student",
    timestamps: true
});

module.exports = mongoose.model("Student", Student);
