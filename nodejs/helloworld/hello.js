// reference the http module so we can create a webserver
var http = require("http");
var pr = require("./parserequest.js");
var li = require("./li.js");

var ctr = 1;

// create a server
http.createServer(function(req, res) {
    var userreq = pr.process(req);
    var mesg = 'Hello World \n';

    if(userreq.app == 'li') {
        li.process(userreq.op);
    }

    console.log(mesg);
    console.log(ctr++);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(mesg);
}).listen(process.env.PORT, process.env.IP);