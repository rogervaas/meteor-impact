var keyCodes = {left : 37, up : 38, right : 39, down: 40};
var map = {37: false, 38: false, 39: false, 40: false};

Sockets.emit("server new player", null);

//bean.on(document, "keydown", function (e) {
//
//  if (e.keyCode === keyCodes.left) {
//    Sockets.emit("server left", null);
//  } else if (e.keyCode === keyCodes.up) {
//    Sockets.emit("server up", null);
//  } else if (e.keyCode === keyCodes.right) {
//    Sockets.emit("server right", null);
//  } else if (e.keyCode === keyCodes.down) {
//    Sockets.emit("server down", null);
//  }
//
//  if (e.keyCode in map) {
//    map[e.keyCode] = true;
//    if (map[keyCodes.up] && map[keyCodes.left]) {
//      Sockets.emit("server up left", null);
//    }
//
//    if (map[keyCodes.up] && map[keyCodes.right]) {
//      Sockets.emit("server up right", null);
//    }
//
//    if (map[keyCodes.down] && map[keyCodes.left]) {
//      Sockets.emit("server down left", null);
//    }
//
//    if (map[keyCodes.down] && map[keyCodes.right]) {
//      Sockets.emit("server down right", null);
//    }
//  }
//
//});
//
//bean.on(document, "keyup", function (e) {
//
//  if (e.keyCode === keyCodes.left || e.keyCode === keyCodes.right) {
//    Sockets.emit("server left right stop", null);
//  } else if (e.keyCode === keyCodes.up || e.keyCode === keyCodes.down) {
//    Sockets.emit("server up down stop", null);
//  }
//
//  if (e.keyCode in map) {
//    map[e.keyCode] = false;
//  }
//
//});


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