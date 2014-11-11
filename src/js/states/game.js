var Player = require('../entities/player');
var Asteroids = require('../entities/asteroids');

var Game = function () {

  this.players = [];
  this.asteroids = [];

};

Game.prototype = {

  create: function () {

    //  This will run in Canvas mode, so let's gain a little speed and display
    this.game.renderer.clearBeforeRender = false;
    this.game.renderer.roundPixels = true;

    // Lets define the input for our game.
    this.game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR
    ]);

    // Setting the global game physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Lets add our universe (background)
    this.game.add.tileSprite(0, 0, screen.width, screen.height, Utils.backgrounds[Utils.randomNumber(0,3)]);

    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    //this.testentity = new Player(this.game, x, y);
    //this.testentity.anchor.setTo(0.5, 0.5);
    //
    ////this.input.onDown.add(this.onInputDown, this);
    //
    //console.log(this.game);


    this.players.push(new Player("spaceship",this.game, x, y));
    this.players[0].anchor.setTo(0.5, 0.5);
    this.players[0].scale.setTo(0.5,0.5);

  },

  update: function () {

    this.screenWrap(this.players[0], this.game);

  },

  screenWrap : function (sprite, game) {

    if (sprite.x < 0) {
      sprite.x = game.width;
    } else if (sprite.x > game.width) {
      sprite.x = 0;
    }

    if (sprite.y < 0) {
      sprite.y = game.height;
    } else if (sprite.y > game.height) {
      sprite.y = 0;
    }
  },

  render : function () {
    this.game.debug.spriteInfo(this.players[0], 32, 32);
    this.game.debug.text('angularVelocity: ' + this.players[0].body.angularVelocity, 32, 200);
    this.game.debug.text('angularAcceleration: ' + this.players[0].body.angularAcceleration, 32, 232);
    this.game.debug.text('angularDrag: ' + this.players[0].body.angularDrag, 32, 264);
    this.game.debug.text('deltaZ: ' + this.players[0].body.deltaZ(), 32, 296);

  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};

module.exports = Game;