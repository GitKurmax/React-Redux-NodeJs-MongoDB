const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: Number,
        required: true,
    } 
});

mongoose.model('users', UserSchema);