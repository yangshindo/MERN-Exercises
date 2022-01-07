const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: String, required: true},
}, {
    timestamps: true,
});

const User = mongoose.model('Exercise', exerciseSchema);

module.exports = User;