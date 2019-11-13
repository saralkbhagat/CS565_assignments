const express = require('express');
// const form = require('./form');
const server = express();
const port = 8080;
server.use(express.static(__dirname));

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));
// server.use(Express.urlencoded({ extended: true }));





server.get('/', function(req, res) {
    res.status(200);
    // res.sendFile(__dirname + '/index.html');
    // res.write('Get Request on Page!\n');
    console.log('get request in log');
    // res.end();
});

// server.get('/submit',function(req,res) {
//     res.send('submit Get Request')
//     console.log('submit get request in log');
// });

server.post('/submit', function(req, res) {
    console.log(req);
    var name2 = req.body.name;
    // var email2 = req.body.email;
    // var feed2 = req.body.feedback;
    console.log('posting form data!');
    console.log(req.body.name);
    // console.log(req.body.email);
    // console.log(req.body.feedback);
    res.write('Post Request\n');
    res.write(`name: ${req.body.name}`);
    // res.write(`e-mail: ${req.body.email}`);
    // res.write(`feedback: ${req.body.feedback}`);
    res.send(name2);
    // next();
    res.end();
});

// server.listen(port, ()=> console.log('server running and listening at http://127.0.0.1:${port}'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`))
