const mongoose = require('mongoose');

const cupcakeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    monkey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Monkey',
        required: true
    },
    status: {
        type: String,
        enum: ['start', 'baking', 'ready']
    },
    color: { type: String, default: "pink" },
});


module.exports = mongoose.model('Cupcake', cupcakeSchema);
