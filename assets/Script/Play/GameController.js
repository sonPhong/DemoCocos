const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        factory: require('MonsterFactory'),
        waveManager: require('WaveManager'),
        monsterControl: cc.Node,
        monterLayer: cc.Node,
        effectPrefab: cc.Prefab,
        effectLayer: cc.Node,
    },

    onLoad() {
        this.initEventsMap();
        this.registerMonsterEvent();
        cc.director.getCollisionManager().enabled = true;
        this.waveManager.init(this.factory, this.monterLayer);
        this.waveManager.startWaves();

        this.monsterController = this.monsterControl.getComponent("MonsterController");
    },
    initEventsMap() {
        this.eventsMap = {
            [EventKey.COLLISION_MONSTER]: this.spawnEffectAt.bind(this),
        };
    },
    registerMonsterEvent() {
        Emitter.instance.registerEventsMap(this.eventsMap);
    },
    Destroy() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    },

    spawnEffectAt(data) {
        console.log(data)

        const worldPos = data.worldPos;
        const amount = data.amount;

        let effect = cc.instantiate(this.effectPrefab);
        let localPos = this.effectLayer.convertToNodeSpaceAR(worldPos);
        console.log(data.currentHealth)
        if (data.currentHealth < 0) {
            console.log('vào')
            effect.getChildByName('Text').getComponent(cc.Label).string = " ";
        } else {
            effect.getChildByName('Text').getComponent(cc.Label).string = `- ${amount} hp`;
        }

        console.log(effect.getChildByName('Text').getComponent(cc.Label).string);

        effect.setPosition(localPos);
        this.effectLayer.addChild(effect);

        this.scheduleOnce(() => {
            effect.destroy();
        }, 0.2);
    }
});
