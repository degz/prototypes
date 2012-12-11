// reference the http module so we can create a webserver
var http = require("http");

// create a server
http.createServer(function(req, res) {
    console.log("Hello world!");
    res.end("Hello world!");

}).listen(process.env.PORT, process.env.IP);