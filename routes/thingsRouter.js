const express = require('express');
const thingsRouter = express.Router();

thingsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the things to you');
})
.post((req, res) => {
    res.end(`Will add the things: ${req.body.name}, with the description: "${req.body.description}" to you`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /things currently');
})
.delete((req, res) => {
    res.end('Deleting all things');
});

module.exports = thingsRouter;