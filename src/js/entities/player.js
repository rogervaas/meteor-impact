var Player = function (sprite, game, x, y) {

    Phaser.Sprite.call(this, game, x, y, sprite);
    game.add.existing(this);

    game.physics.enable(this, Phaser.Physics.ARCADE);


    this.body.drag.set(100);
    this.body.maxVelocity.set(200);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.body.angularVelocity = -200;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.body.angularVelocity = 200;
    } else {
        this.body.angularVelocity = 0;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.body.acceleration);
    } else {
        this.body.acceleration.set(0);
    }

};

Player.prototype.fire = function () {
    if (this.game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(sprite.body.x + 16, sprite.body.y + 16);
            bullet.lifespan = 2000;
            bullet.rotation = sprite.rotation;
            game.physics.arcade.velocityFromRotation(sprite.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }
};

module.exports = Player;
