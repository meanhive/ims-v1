const mongoose = require('mongoose');

const Setting = new mongoose.Schema({
    
}, {
    collection: "settings",
    timestamps: true
});

module.exports = mongoose.model("Setting", Setting);
