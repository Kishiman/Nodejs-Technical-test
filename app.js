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

const testRequestsA = require("./testRequestsA")
const testRequestsB = require("./testRequestsB")
const testRequestsC = require("./testRequestsC")

if (process.env.TEST_REQUESTS) {
  const promise = new Promise(async (resolve, reject) => {
    //make sure the database is configured correctly before runing any test 

    //Ready!
    return resolve()
  })
    .then(async () => {

      const filepath = process.env.PUBLIC_PATH + "/" + process.env.TEST_REQUESTS_OUT_FILE

      //level 1
      // await TestRequestsLib.Test(testRequestsA, filepath + "A.log")

      //level 2
      // await TestRequestsLib.Test(testRequestsB, filepath + "B.log")

      //EMPTY DATBASE REQUIRED!

      //level 3 (both tests)
      // await TestRequestsLib.Test(testRequestsC, filepath + "C.log")
      // await TestRequestsLib.Test(testRequestsB, filepath + "C_B.log")
    })
}

/*
this is the native MySQL connection
var db = require('./db'); */


module.exports = app;