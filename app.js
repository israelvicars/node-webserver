'use strict';

var express = require('express');
var badges = require('./controllers/badges')

var app = express();

 // Have server listen on port 8000

app.listen(8000, function(){
	console.log('Server is listening on port %d', 8000);
});

// Parse JSON data from incoming requests

app.use(express.json());

// Accept POST requests and then publish the body of the request

app.post('/', badges.save, badges.send, function(req, res) {
	res.send('\ndone\n\n');
});

// Get the 10 most recent badges

app.get('/badges', badges.get);
