const { Console } = require('console');
const express = require('express');
const path = require('path');
const appServer = express();

const host = 'localhost';
const port = 8082;

appServer.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

appServer.get("", (request, response) => {
    response.send("<h1>Hello from my first NodeJS server!</h1>");
});

appServer.get('/Home', function(request, response) {
    response.sendFile(path.join(__dirname, '/Home.html'));
});

appServer.get('/Contact', function(request, response) {
    response.sendFile(path.join(__dirname, '/Contact.html'));
});

appServer.get('/Survey', function(request, response) {
    response.sendFile(path.join(__dirname, '/Survey.html'));
});

appServer.get('/About', function(request, response) {
    response.sendFile(path.join(__dirname, '/About.html'));
});