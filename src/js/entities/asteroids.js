var Asteroids = function (sprite, game, x, y) {

  Phaser.Sprite.call(this, game, x, y, sprite);
  game.add.existing(this);

  game.physics.enable(this, Phaser.Physics.ARCADE);


  this.body.drag.set(100);
  this.body.maxVelocity.set(200);
};

Asteroids.prototype = Object.create(Phaser.Sprite.prototype);
Asteroids.prototype.constructor = Asteroids;

/**
 * Automatically called by World.update
 */
Asteroids.prototype.update = function() {



};

module.exports = Asteroids;
