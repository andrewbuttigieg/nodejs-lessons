var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('click', function(msg){
    io.emit('click', 'click confirmed');
    console.log('click fired');
  });
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

