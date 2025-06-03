const EventKey = require('EventKey');
const Emitter = require('Emitter');
const StateMachine = require('javascript-state-machine');

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

        this.type = "";
        this.id = "";

        this.initFSM();
        this.onStartMoving();
    },

    initFSM() {
        this.fsm = new StateMachine({
            init: 'idle',
            transitions: [
                { name: 'startMoving', from: 'idle', to: 'moving' },
                { name: 'getAttacked', from: 'moving', to: 'attacked' },
                { name: 'resumeMove', from: 'attacked', to: 'moving' },
                { name: 'die', from: ['idle', 'moving', 'attacked'], to: 'dead' }
            ],
            methods: {
                onBeforeStartMoving: () => this.onStartMoving(),
                onEnterMoving: () => this.onEnterMoving(),
                onGetAttacked: () => this.onGetAttacked(),
                onEnterAttacked: () => this.onEnterAttacked(),
                onBeforeDie: () => this.onDie(),
                onEnterDead: () => this.onEnterDead(),
            }
        });
    },

    onStartMoving() {
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

    onGetAttacked() {
       
    },

    onEnterAttacked() {
        
    },

    onDie() {
    },

    onEnterDead() {
        if (this.walkingTween || this.walking) {
            this.walkingTween.stop();
            this.walking.stop();
        }
    },

    takeDamage(amount) {
        if (this.fsm.is('dead')) return;
        this.currentHealth -= amount;
        if (this.currentHealth <= 0) this.currentHealth = 0;
        this.healthBar.progress = this.currentHealth / this.maxHealth;
        console.log(this.healthBar.progress);

        if (this.healthBar.progress <= 0) {
            if (this.fsm.can('die')) this.fsm.die();
            console.log('die')
        } else {
            if (this.fsm.can('getAttacked')) this.fsm.getAttacked();
            console.log(this.fsm.state)
            console.log('attack')
        }
    },

    onCollisionEnter(other, self) {
        if (this.fsm.is('dead')) return;
        if (other.node.group == 'Sword') this.takeDamage(this.amount);
        const pos = self.node.position;
        const worldPos = self.node.parent.convertToWorldSpaceAR(pos);

        const infoCollision = {
            'hpProgress': this.healthBar.progress,
            'id': this.id,
            'type': this.type,
            'maxHealth': this.maxHealth,
            'currentHealth': this.currentHealth,
            'amount': this.amount,
            'pos': pos,
            'worldPos': worldPos,
        }

        Emitter.instance.emit(EventKey.COLLISION_MONSTER, infoCollision);

        if (other.node.group == 'EndScene' && this.fsm.can('die')) this.fsm.die();;

    }
});
