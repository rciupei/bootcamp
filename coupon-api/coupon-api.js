const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./models/config');
const users = require('./controllers/users')

var app = express();

mongoose.connect('localhost:5000');

if (app.get('env') === 'development') var dev = true;

// log if in dev mode
if (dev) app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//for now
var userDB = [];
//================================================
// Routes
//================================================

app.get('/users', users.getUsers);
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);

// handle 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// another errorhandler

app.use(function(err, req, res, next) {
    console.log('oops');
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send();
});

var server = app.listen(config.port);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
