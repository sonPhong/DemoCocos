const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    onLoad() {
        this.rotateAndMove();
        this.initEventsMap();
        this.registerEndWaveEvent();
    },
    initEventsMap() {
        this.eventsMap = {
            [EventKey.END_WAVE]: this.endAnimation.bind(this),
        };
    },
    registerEndWaveEvent() {
        Emitter.instance.registerEventsMap(this.eventsMap);
    },
    Destroy() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    },

    rotateAndMove() {
        let startX = this.node.x;
        let offset = 300;

        this.rotate = cc.tween(this.node)
            .repeatForever(
                cc.tween().by(0.1, { angle: 360 })
            )
            .start();

        this.move = cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .to(0.3, { x: startX + offset })
                    .to(1, { x: startX - offset })
            )
            .start();
    },

    endAnimation(data) {
        console.log(this.node);
        this.node.destroy();
        this.rotate.stop();
        this.move.stop();
    }


});
