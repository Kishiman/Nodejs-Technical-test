var app = require('./app');
require('dotenv').config();
const http = require('http');
const IPLib = require('./lib/ip');
var port = IPLib.port



const https = require('https');
const fs = require('fs');

if (process.env.ISLOCAL) {

  var server = http.Server(app);
  server.listen(port, function () {
    console.log('Express server listening on port ' + port);
  });
} else {
  var options = {
    key: fs.readFileSync('../../../etc/letsencrypt/live/apiformation.schoolcom.net/privkey.pem'),
    cert: fs.readFileSync('../../../etc/letsencrypt/live/apiformation.schoolcom.net/fullchain.pem'),
  };

  var server = https.createServer(options, app).listen(port,
    () => console.log("server is  runnig in production mode at" + port));
}

