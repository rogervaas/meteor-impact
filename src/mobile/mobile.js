var keyCodes = {left : 37, up : 38, right : 39, down: 40};
var map = {37: false, 38: false, 39: false, 40: false};

Sockets.emit("server new player", null);

bean.on(document.getElementById("left"), "touchstart", function (e) {
  Sockets.emit("server left", null);
});

bean.on(document.getElementById("right"), "touchstart", function (e) {
  Sockets.emit("server right", null);
});

bean.on(document.getElementById("up"), "touchstart", function (e) {
  Sockets.emit("server up", null);
});

bean.on(document.getElementById("down"), "touchstart", function (e) {
  Sockets.emit("server down", null);
});

bean.on(document.getElementById("left"), "touchend", function (e) {
  Sockets.emit("server left right stop", null);
});

bean.on(document.getElementById("up"), "touchend", function (e) {
  Sockets.emit("server up down stop", null);
});

bean.on(document.getElementById("right"), "touchend", function (e) {
  Sockets.emit("server left right stop", null);
});

bean.on(document.getElementById("down"), "touchend", function (e) {
  Sockets.emit("server up down stop", null);
});

bean.on(document.getElementById("shoot"), "touchstart", function (e) {
  Sockets.emit("server shoot", null);
});