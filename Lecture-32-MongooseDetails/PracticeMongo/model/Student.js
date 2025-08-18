const mongoose = require('mongoose')
const { Schema } = mongoose;


const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    marks: Number,
    
    address_id: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
})

module.exports = mongoose.model('Student', studentSchema)