var Utils = {
    containsObject: function(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    },

    randomNumber: function(minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    },

    getScreenWidth : function () {
        return screen.width;
    },

    getScreenHeight : function () {
        return screen.height;
    },

    backgrounds : [
    "backgroundBlack",
    "backgroundBlue",
    "backgroundDarkPurple",
    "backgroundPurple"
    ]
};

module.exports = Utils;