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
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    },

    getScreenHeight : function () {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    },

    backgrounds : [
    "backgroundBlack",
    "backgroundBlue",
    "backgroundDarkPurple",
    "backgroundPurple"
    ]
};

module.exports = Utils;