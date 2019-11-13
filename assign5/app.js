const express = require('express');
const server = express();
const port = 8080;
const bodyParser = require("body-parser");

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', function(req, res) {
    res.status(200);
    // res.sendFile(__dirname + '/index.html');
    // res.write('Get Request on Page!\n');
    console.log('get request in log');
    // res.end();
});

server.post('/submit', function(req, res) {
    // console.log(req);
    console.log('posting form data!');
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.feedback);
    res.write('Post Request\n');
    res.write(`name: ${req.body.name}\n`);
    res.write(`e-mail: ${req.body.email}\n`);
    res.write(`feedback: ${req.body.feedback}\n`);
    // next();
    res.end();
});

// server.listen(port, ()=> console.log('server running and listening at http://127.0.0.1:${port}'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`))
