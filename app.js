var express = require('express');
var cors = require('cors')
var app = express();
//file upload dependencies
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

app.use(cors())

// enable files upload
app.use(express.static('assets'));
app.use(express.static('uploads'));
app.use(fileUpload({
  createParentPath: true
}));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

//add other middleware
// app.use(cors());
app.use(bodyParser.json({ limit: '50mb', }));
app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  limit: '50mb',
  extended: true
}));
app.use(morgan('dev'));


/*
this is the native MySQL connection
var db = require('./db'); */


module.exports = app;