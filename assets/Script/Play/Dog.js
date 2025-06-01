const MonsterBase = require("MonsterBase");

cc.Class({
    extends: MonsterBase,

    init(level = 1) {
        this._super(level);
        this.maxHealth = 150 * level;
        this.currentHealth = this.maxHealth;
        this.healthBar.progress = 1;
        this.moveDuration = 4 + Math.random();
    },

    die() {
        this._super();
        cc.tween(this.node)
            .to(0.4, { angle: -180 })
            .to(0.4, { opacity: 0, y: this.node.y - 30 })
            .call(() => this.node.destroy())
            .start();
    },

});