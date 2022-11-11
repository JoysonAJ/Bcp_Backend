const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    id: {
        type: String,
        unique: true
    }
},{
    timestamps: true,
})

const User = mongoose.model('User',userSchema)

module.exports = User;