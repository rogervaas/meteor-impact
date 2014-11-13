'use strict';

window.Utils = require('./utils');
window.Sockets = io();

if (document.getElementById("meteorimpact-game")) {
    var game = new Phaser.Game(Utils.getScreenWidth(), Utils.getScreenHeight(), Phaser.AUTO, 'meteorimpact-game');

    window.playerState = {
        currentLevel: 'Game'
    };

    game.state.add('Boot', require('./states/boot'));
    game.state.add('Splash', require('./states/splash'));
    game.state.add('Preloader', require('./states/preloader'));
    game.state.add('Menu', require('./states/menu'));
    game.state.add('Game', require('./states/game'));

    game.state.start('Boot');
}

var keyCodes = {left : 37, up : 38, right : 39, down: 40};
var map = {37: false, 38: false, 39: false, 40: false};

bean.on(document, "keydown", function (e) {
    console.log("work key");
    if (e.keyCode === keyCodes.left) {
        Sockets.emit("server left", null);
    } else if (e.keyCode === keyCodes.up) {
        Sockets.emit("server up", null);
    } else if (e.keyCode === keyCodes.right) {
        Sockets.emit("server right", null);
    } else if (e.keyCode === keyCodes.down) {
        Sockets.emit("server down", null);
    }

    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[keyCodes.up] && map[keyCodes.left]) {
            Sockets.emit("server up left", null);
        }

        if (map[keyCodes.up] && map[keyCodes.right]) {
            Sockets.emit("server up right", null);
        }

        if (map[keyCodes.down] && map[keyCodes.left]) {
            Sockets.emit("server down left", null);
        }

        if (map[keyCodes.down] && map[keyCodes.right]) {
            Sockets.emit("server down right", null);
        }
    }

});

bean.on(document, "keyup", function (e) {

    if (e.keyCode === keyCodes.left || e.keyCode === keyCodes.right) {
        Sockets.emit("server left right stop", null);
    } else if (e.keyCode === keyCodes.up || e.keyCode === keyCodes.down) {
        Sockets.emit("server up down stop", null);
    }

    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }

});

if (document.getElementById("left")) {
    bean.on(document.getElementById("left"), "touchstart", function (e) {
        Sockets.emit("server left", null);
    });

    bean.on(document.getElementById("left"), "touchend", function (e) {
        Sockets.emit("server left right stop", null);
    });

    bean.on(document.getElementById("right"), "touchstart", function (e) {
        Sockets.emit("server right", null);
    });

    bean.on(document.getElementById("right"), "touchend", function (e) {
        Sockets.emit("server left right stop", null);
    });

    bean.on(document.getElementById("up"), "touchstart", function (e) {
        Sockets.emit("server up", null);
    });

    bean.on(document.getElementById("up"), "touchend", function (e) {
        Sockets.emit("server up down stop", null);
    });

    bean.on(document.getElementById("down"), "touchstart", function (e) {
        Sockets.emit("server down", null);
    });

    bean.on(document.getElementById("down"), "touchend", function (e) {
        Sockets.emit("server up down stop", null);
    });
}