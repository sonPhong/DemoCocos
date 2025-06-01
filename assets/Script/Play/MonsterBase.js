const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        healthBar: cc.ProgressBar,
        maxHealth: 100,
        currentHealth: 100,
        moveDuration: 5,
        amount: 100,
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
        this.walking = cc.tween(this.node)
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
    },

    die() {
        if (this.walkingTween || this.walking) {
            this.walkingTween.stop();
            this.walking.stop();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group == 'Sword') this.takeDamage(this.amount);
        const pos = self.node.position;
        const worldPos = self.node.parent.convertToWorldSpaceAR(pos);

        const infoCollision = {
            'id': this.id,
            'type': this.type,
            'maxHealth': this.maxHealth,
            'currentHealth': this.currentHealth,
            'amount': this.amount,
            'pos': pos,
            'worldPos': worldPos,
        }

        Emitter.instance.emit(EventKey.COLLISION_MONSTER, infoCollision);

        if (other.node.group == 'EndScene') this.die();

    }
});
