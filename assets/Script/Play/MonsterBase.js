cc.Class({
    extends: cc.Component,

    properties: {
        healthBar: cc.ProgressBar,
        maxHealth: 100,
        currentHealth: 100,
        moveDuration: 5,
    },

    init(level = 1) {
        this.maxHealth = 100 * level;
        this.currentHealth = this.maxHealth;
        this.healthBar.progress = 1;
        this.startMoving();

        this.type = "";
        this.id = "";



    },

    startMoving() {
        const endX = -cc.winSize.width / 2 + 100;
        cc.tween(this.node)
            .to(this.moveDuration, { x: endX })
            .start();
        this.walkingTween = cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(0.25, { y: 10 })
                    .by(0.25, { y: -10 })
            )
            .start();
    },

    takeDamage(amount) {
        this.currentHealth -= amount;
        if (this.currentHealth < 0) this.currentHealth = 0;
        this.healthBar.progress = this.currentHealth / this.maxHealth;

        if (this.currentHealth <= 0) {
            this.die();
        }

    },

    die() {
        if (this.walkingTween) {
            this.walkingTween.stop();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group == 'EndScene') this.die();
        if (other.node.group == 'Sword') this.takeDamage(100);
    }
});
