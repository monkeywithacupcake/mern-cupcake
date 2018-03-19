const mongoose = require('mongoose');

const bakerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true},
    name: { type: String, required: true, match: /[a-zA-Z ]*/},
    bakery_name: { type: String, required: true, match: /[a-zA-Z ]*/},
    lastlogin: { type: Date },
});

module.exports = mongoose.model('Baker', bakerSchema);
