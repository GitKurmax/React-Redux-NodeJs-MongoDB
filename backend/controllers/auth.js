const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../models/User');

const User = mongoose.model('users');

module.exports.register = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
    })

    user.save()
    .then(() => {
        res.status(201).json({message: 'success', status: 201});
    })
    .catch(err => {
        res.status(409).json({message: 'This email alredy exists', status: 409});
    });
}

module.exports.login = (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if (user) {
            console.log(user)
        } else {
            console.log(user)
        }
    });

}