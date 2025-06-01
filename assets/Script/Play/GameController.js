cc.Class({
    extends: cc.Component,

    properties: {
        factory: require('MonsterFactory'),
        waveManager: require('WaveManager'),
        monsterControl: cc.Node,
        monterLayer: cc.Node,
    },

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.waveManager.init(this.factory, this.monterLayer);
        this.waveManager.startWaves();

        this.monsterController = this.monsterControl.getComponent("MonsterController");
    }
});
