const mongoose = require('mongoose');

const Course = new mongoose.Schema({}, {
    collection: "course",
    timestamps: true
});

module.exports = mongoose.model("Course", Course);
