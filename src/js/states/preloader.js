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

    // Loading Spaceships
    this.load.image("spaceship", "assets/spaceships/playerShip1_blue.png");

    // Loading Backgrounds
    this.load.image("backgroundBlack", "assets/backgrounds/black.png");
    this.load.image("backgroundBlue", "assets/backgrounds/blue.png");
    this.load.image("backgroundDarkPurple", "assets/backgrounds/darkPurple.png");
    this.load.image("backgroundPurple", "assets/backgrounds/purple.png");

    // Loading Meteors
    this.load.image("meteorBrown_big1", "assets/meteors/meteorBrown_big1.png");
    this.load.image("meteorBrown_big2", "assets/meteors/meteorBrown_big2.png");
    this.load.image("meteorBrown_big3", "assets/meteors/meteorBrown_big3.png");
    this.load.image("meteorBrown_big4", "assets/meteors/meteorBrown_big4.png");
    this.load.image("meteorBrown_med1", "assets/meteors/meteorBrown_med1.png");
    this.load.image("meteorBrown_med3", "assets/meteors/meteorBrown_med3.png");
    this.load.image("meteorBrown_small1", "assets/meteors/meteorBrown_small1.png");
    this.load.image("meteorBrown_small2", "assets/meteors/meteorBrown_small2.png");
    this.load.image("meteorBrown_tiny1", "assets/meteors/meteorBrown_tiny1.png");
    this.load.image("meteorBrown_tiny2", "assets/meteors/meteorBrown_tiny2.png");
    this.load.image("meteorGrey_big1", "assets/meteors/meteorGrey_big1.png");
    this.load.image("meteorGrey_big2", "assets/meteors/meteorGrey_big2.png");
    this.load.image("meteorGrey_big3", "assets/meteors/meteorGrey_big3.png");
    this.load.image("meteorGrey_big4", "assets/meteors/meteorGrey_big4.png");
    this.load.image("meteorGrey_med1", "assets/meteors/meteorGrey_med1.png");
    this.load.image("meteorGrey_med2", "assets/meteors/meteorGrey_med2.png");
    this.load.image("meteorGrey_small1", "assets/meteors/meteorGrey_small1.png");
    this.load.image("meteorGrey_small2", "assets/meteors/meteorGrey_small2.png");
    this.load.image("meteorGrey_tiny1", "assets/meteors/meteorGrey_tiny1.png");
    this.load.image("meteorGrey_tiny2", "assets/meteors/meteorGrey_tiny2.png");

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
