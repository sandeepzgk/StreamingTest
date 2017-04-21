/*
Setting up of expressJS and Socket.IO for 
*/
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./public'));

http.listen(1337, function(){
  console.log('listening on *:1337');
});

var isUserConnected = false;
io.on('connection', function(socket){
	
	console.log('a user connected');
 
});


var i = 0;
setInterval(function(){
	

	
	io.emit('hr', {"data":1+Math.sin(i)});
	i++;
	
	
	
},100);