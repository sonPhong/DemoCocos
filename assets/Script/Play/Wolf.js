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

    onEnterDead() {
        this._super();
        this.dieDog = cc.tween(this.node)
            .repeatForever(
                cc.tween().by(0.1, { angle: 360 })
            )
            .start();
        cc.tween(this.node)
            .delay(0.1)
            .to(0.3, { opacity: 0, x: this.node.x + 200, y: this.node.y + 200 })
            .call(() => {
                this.dieDog.stop();
                this.node.destroy();
            })
            .start();
    },

});