const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const port = process.env.PORT || 5000;
const connectToDB = require("./backend/connect");
const auth = require('./backend/controllers/auth');

require('./backend/models/person.model');

const Person = mongoose.model('persons');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

connectToDB();

app.get('/api/getAll', function (req, res) {
    Person.find()
        .then(users => res.json(users))
        .catch(error => console.log(error));
});

app.post('/api/add', function (req, res) {
    const person = new Person ({
        name: req.body.name,
        age: req.body.age
    });

    person.save()
     .then(user => {
        res.json(user)})
     .catch(error => console.log(error));
});

app.post('/api/removeUser', function (req, res) {
    Person.findOneAndRemove({_id: req.body.id}, (err, todo) => {
    if (err) return res.status(500).send(err);
        return res.status(200).send({'message':'User successfully deleted'});
    });
});

app.use('/api/authRegister', auth.register);

app.put('/api/editUser', function (req, res) {
    Person.findOneAndUpdate({_id: req.body.id},
         {name: req.body.name, age: req.body.age},
         (err, todo) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({'message':'User successfully updated'});
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/dist/browser'));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'frontend', 'dist', 'browser', 'index.html'
            )
        )
    })
}

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
