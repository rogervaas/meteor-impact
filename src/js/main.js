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