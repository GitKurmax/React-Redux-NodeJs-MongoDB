const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        unique: false
    },

    lastName: {
        type: String,
        required: true,
        unique: false
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    } 
});

mongoose.model('users', UserSchema);