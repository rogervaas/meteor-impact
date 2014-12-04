var Menu = function () {
  this.text = null;
};

module.exports = Menu;

Menu.prototype = {

  create: function () {
    this.game.add.tileSprite(0, 0, screen.width, screen.height, Utils.backgrounds[Utils.randomNumber(0,3)]);
    this.displayText();
    this.input.onDown.add(this.onDown, this);

    this.introAudio = this.game.add.audio("intro");
    this.introAudio.play();

  },

  update: function () {

  },

  onDown: function () {
    this.game.state.start(playerState.currentLevel);
  },

  displayText : function () {
    var x = this.game.width / 2;
    var y = this.game.height / 2;
    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
    this.text = this.add.text(x - 200, y - 200, "Click to Start", style);
  }
};
