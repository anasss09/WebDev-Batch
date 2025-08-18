const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    cart: [{
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "products"
        },
        quantity: Number
    }],
    orders: [{
        products: [],
        totalPrice: Number,
        date: {
            type: Date,
            default: Date.now
        }
    }]
})

module.exports = mongoose.model('users', userSchema);