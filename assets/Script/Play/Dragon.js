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
        this.dieDog = cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .to(0.1, { scaleX: 2 })
                    .to(0.1, { scaleX: 1 })
                    .to(0.1, { opacity: 100 })
                    .to(0.1, { opacity: 255 })
            )
            .start();
        cc.tween(this.node)
            .delay(0.3)
            .to(0.5, { opacity: 0, y: this.node.y - 100 })
            .call(() => {
                this.dieDog.stop();
                this.node.destroy();
            })
            .start();
    },

});