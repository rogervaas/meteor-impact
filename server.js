var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/mobile', function(req, res){
  res.sendFile(__dirname + '/dist/mobile.html');
});

io.on('connection', function(socket){

  var player = {
    id : socket.id
  };

  console.log("User: " + socket.id + " Connected");

  socket.on('disconnect', function(){
    console.log("User: " + socket.id + " Disconnected");

    socket.emit("client disconnected", player);
    socket.broadcast.emit("client disconnected", player);
  });

  socket.on('server new player', function(){
    socket.emit("client new player", player);
    socket.broadcast.emit("client new player", player);
    console.log("server new player");
  });

  socket.on("server left", function () {
    socket.emit("client left", player);
    socket.broadcast.emit("client left", player);
  });

  socket.on("server right", function () {
    socket.emit("client right", player);
    socket.broadcast.emit("client right", player);
  });

  socket.on("server up", function () {
    socket.emit("client up", player);
    socket.broadcast.emit("client up", player);
  });

  socket.on("server down", function () {
    socket.emit("client down", player);
    socket.broadcast.emit("client down", player);
  });

  socket.on("server left right stop", function () {
    socket.emit("client left right stop", player);
    socket.broadcast.emit("client left right stop", player);
  });

  socket.on("server up down stop", function () {
    socket.emit("client up down stop", player);
    socket.broadcast.emit("client up down stop", player);
  });

  socket.on("server up left", function () {
    socket.emit("client up left", player);
    socket.broadcast.emit("client up left", player);
  });

  socket.on("server up right", function () {
    socket.emit("client up right", player);
    socket.broadcast.emit("client up right", player);
  });

  socket.on("server down left", function () {
    socket.emit("client down left", player);
    socket.broadcast.emit("client down left", player);
  });

  socket.on("server down right", function () {
    socket.emit("client down right", player);
    socket.broadcast.emit("client down right", player);
  });

});

http.listen(3000, function(){
  console.log('listening on port: 3000');
});