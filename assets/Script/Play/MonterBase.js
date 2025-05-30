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
        console.log(this.maxHealth);
        this.currentHealth = this.maxHealth;
        console.log(this.currentHealth);
        this.healthBar.progress = 1;

        this.startMoving();

        cc.director.getCollisionManager().enabled = true;
        console.log('x');

    },

    startMoving() {

        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(0.5, { x: -100 })
            )
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

        console.log(this.currentHealth);
    },

    die() {

    },
});
