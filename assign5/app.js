const express = require('express');
// const form = require('./form');
const server = express();
const port = 8080;

server.get('/', function(req, res) {
    res.status(200);
    res.write('Get Request\n');
    res.end();
});



server.post('/submit', function(req, res, next) {
    console.log('hello from the middleware!');
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.feedback)
    res.write('Post Request');
    // next();

});

// server.listen(port, ()=> console.log('server running and listening at http://127.0.0.1:${port}'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`))