var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {

    var x = this.game.width / 2;
    var y = this.game.height / 2;
    this.asset = this.add.sprite(x, y, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    // Loading Spaceships
    this.load.image("playerShip1_blue", "assets/spaceships/playerShip1_orange.png");
    this.load.image("playerShip1_green", "assets/spaceships/playerShip1_blue.png");
    this.load.image("playerShip1_orange", "assets/spaceships/playerShip1_green.png");
    this.load.image("playerShip1_red", "assets/spaceships/playerShip1_red.png");
    this.load.image("playerShip2_blue", "assets/spaceships/playerShip2_blue.png");
    this.load.image("playerShip2_green", "assets/spaceships/playerShip2_green.png");
    this.load.image("playerShip2_orange", "assets/spaceships/playerShip2_orange.png");
    this.load.image("playerShip2_red", "assets/spaceships/playerShip2_red.png");
    this.load.image("playerShip3_blue", "assets/spaceships/playerShip3_blue.png");
    this.load.image("playerShip3_green", "assets/spaceships/playerShip3_green.png");
    this.load.image("playerShip3_orange", "assets/spaceships/playerShip3_orange.png");
    this.load.image("playerShip3_red", "assets/spaceships/playerShip3_red.png");

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

    // Loading Bullets
    this.load.image("laserBlueOne", "assets/spaceships/bullets/laserBlue01.png");

    // Loading Sounds
    this.load.audio("laser", "assets/audio/laser.ogg");
    this.load.audio("trash", "assets/audio/spaceTrash.ogg");
    this.load.audio("intro", "assets/audio/intro.ogg");
    this.load.audio("playing", "assets/audio/playing.mp3");
    this.load.audio("playerHit", "assets/audio/playerHit.ogg");

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
