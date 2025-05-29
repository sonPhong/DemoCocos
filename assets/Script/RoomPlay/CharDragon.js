const CharItem = require("CharItem");

cc.Class({
    extends: CharItem,

    init(level) {
        this._super(level);
        this.health += 100;
        this.speed += 30;
    }
});