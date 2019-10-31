const mongoURI = require('./config/keys');
const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect(mongoURI.mongoURI,
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
           .then(() => console.log('mongodb has started'))
           .catch((err) => console.log('connection error' + err));
}

module.exports = connectToDB;
