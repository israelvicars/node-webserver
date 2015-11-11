'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

// Bind pub socket to localhost:8001

socket.bind(8001);

// On error

socket.on('error', function(err){
  throw err;
});

// Send a badge to the publish socket

exports.send = function(data){
  socket.send(data);
};
