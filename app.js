var express = require('express');
var cors = require('cors')
var app = express();
//file upload dependencies
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const TestRequestsLib = require('./lib/testRequests');

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
const testRequests = require("./testRequests")
if (process.env.TEST_REQUESTS) {
  console.log("PUBLIC_PATH", process.env.PUBLIC_PATH);
  const filepath = process.env.PUBLIC_PATH + "/" + process.env.TEST_REQUESTS_OUT_FILE
  TestRequestsLib.Test(testRequests, filepath)

}

/*
this is the native MySQL connection
var db = require('./db'); */


module.exports = app;