/* Import node's http module: */
var connect = require('connect');
var http = require("http");
var serveStatic = require('serve-static')
var app = connect();


var srcPath = __dirname + '/';
var destPath = __dirname + '/client/css/';
var port = process.env.PORT || 3000;

app.use('/',
  serveStatic('./client/', {})
);


http.createServer(app).listen(port);
console.log('Server listening on port ' + port);
