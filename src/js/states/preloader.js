var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.image('testsprite', 'assets/test.png');

    this.load.image("spaceship", "assets/spaceships/playerShip1_blue.png");

    this.load.image("backgroundBlack", "assets/backgrounds/black.png");
    this.load.image("backgroundBlue", "assets/backgrounds/blue.png");
    this.load.image("backgroundDarkPurple", "assets/backgrounds/darkPurple.png");
    this.load.image("backgroundPurple", "assets/backgrounds/purple.png");
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
