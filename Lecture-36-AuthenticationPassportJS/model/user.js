const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: String,
    googleId: String,
    googleImg: String,
    googleAccessToken: String
})

module.exports = mongoose.model('user', userSchema);