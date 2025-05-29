cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        health: 100,
    },

    init(level) {
        this.level = level;
        this.health *= level;
        this.speed += level * 10;

        
    },
    update(dt) {
        this.node.x -= this.speed * dt;

        if (this.node.x < -cc.winSize.width / 2 - 100) {
            this.node.destroy();
        }
    },

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.die();
        }
    },

    die() {
        this.node.destroy();
    }

});
