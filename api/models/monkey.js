const mongoose = require('mongoose');

const monkeySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
});

module.exports = mongoose.model('Monkey', monkeySchema);
