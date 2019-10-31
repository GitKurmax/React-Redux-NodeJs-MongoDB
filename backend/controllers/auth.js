const mongoose = require('mongoose');

require('../models/User');

const User = mongoose.model('users');

module.exports.register = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save()
        .then(() => {
            res.send('Success');
        })
        .catch(err => {
            res.send('Failed');
        });
}