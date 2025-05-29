const EnemyBase = require("MonterBase");

cc.Class({
    extends: EnemyBase,

    init(level = 1) {
        this._super(level);
        this.moveDuration = 4 + Math.random();
    },

    die() {
        this._super();

        // cc.tween(this.node)
        //     .to(0.3, { angle: 90 })
        //     .to(0.3, { opacity: 0, y: this.node.y - 30 })
        //     .start();
    },

    onCollisionEnter(other,self){
        if(other.node.group == 'EndScene'){
            this.die();
        }if(other.node.group == 'Sword'){
            this.takeDamage(100);
        }
    },
});