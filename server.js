var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

io.on('connection', function(socket){

  console.log("User: " + socket.id + "Connected");

  socket.on('disconnect', function(){
    console.log("User: " + socket.id + "Disconnected");
  });

  socket.on("server left", function () {
    socket.emit("client left", null);
    socket.broadcast.emit("client left", null);
  });

  socket.on("server right", function () {
    socket.emit("client right", null);
    socket.broadcast.emit("client right", null);
  });

  socket.on("server up", function () {
    socket.emit("client up", null);
    socket.broadcast.emit("client up", null);
  });

  socket.on("server down", function () {
    socket.emit("client down", null);
    socket.broadcast.emit("client down", null);
  });

  socket.on("server left right stop", function () {
    socket.emit("client left right stop", null);
    socket.broadcast.emit("client left right stop", null);
  });

  socket.on("server up down stop", function () {
    socket.emit("client up down stop", null);
    socket.broadcast.emit("client up down stop", null);
  });

  socket.on("server up left", function () {
    socket.emit("client up left", null);
    socket.broadcast.emit("client up left", null);
  });

  socket.on("server up right", function () {
    socket.emit("client up right", null);
    socket.broadcast.emit("client up right", null);
  });

  socket.on("server down left", function () {
    socket.emit("client down left", null);
    socket.broadcast.emit("client down left", null);
  });

  socket.on("server down right", function () {
    socket.emit("client down right", null);
    socket.broadcast.emit("client down right", null);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});