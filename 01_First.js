var http = require ('http');
var dt = require('./01_Module');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Mission Complete!');
}).listen(8080);        // goto "http://localhost:8080/" as "8080" has been provided to the web to listen to