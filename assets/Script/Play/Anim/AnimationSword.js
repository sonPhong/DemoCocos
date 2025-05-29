cc.Class({
    extends: cc.Component,

    onLoad() {
        this.rotationAnim();
    },

    rotationAnim() {
        cc.tween(this.node)
            .repeatForever(
                cc.tween()
                    .by(0.5, { angle: 360 })
            )
            .start();
    }

});
