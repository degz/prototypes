var express = require('express');
var app = express();
app.use(express.bodyParser()); // Required for parsing POST

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/home', function(req,res){
    console.log(__dirname);
    res.sendfile(__dirname + '/init.html');
});

app.post('/request', function(req, res){
    console.log("received POST: app.post('/request', function(req, res){ ... }")

    console.log("req.param: " + req.param("email"));
    console.log("req.body: " + req.body);
    console.log("req: " + req); //[object Object]

    // TypeError: Converting circular structure to JSON
    // console.log("req (stringify)" + JSON.stringify(req))

    var myResponse = {thank : "you"}; // Received JSON - need reply with JSON

    res.setHeader("Content-Type", "text/html");
    res.write(JSON.stringify(myResponse));
    res.end();

    console.log("response sent");
});

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);