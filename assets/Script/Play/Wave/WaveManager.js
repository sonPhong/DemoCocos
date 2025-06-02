const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        totalWaves: 10,
        waveConfigPath: "waveConfig",
    },

    init(factory, enemyLayer) {
        this.factory = factory;
        this.enemyLayer = enemyLayer;
        this.currentWave = 0;
    },

    startWaves() {
        this.scheduleOnce(() => this.spawnNextWave(), 1);
    },

    spawnNextWave() {
        const config = this.getWaveData(this.currentWave);
        if (!config) {
            cc.log("Hết wave!");
            Emitter.instance.emit(EventKey.END_WAVE);
            return;
        }

        const expanded = this.expandWaveData(config, this.currentWave + 1);

        this.currentWave++;
        expanded.forEach((monsterData, index) => {
            this.scheduleOnce(() => {
                this.factory.createMonster(monsterData.type, this.enemyLayer, monsterData.level);
            }, index * 0.4);
        });

        cc.log('Wave:', this.currentWave);

        this.scheduleOnce(() => this.spawnNextWave(), expanded.length * 0.4 + 4);
    },

    getWaveData(waveIndex) {
        const waves = [
            [{ type: "Dog", count: 3 }],
            [{ type: "Dog", count: 3 }, { type: "Wolf", count: 3 }],
            [{ type: "Dog", count: 5 }, { type: "Wolf", count: 5 }],
            [{ type: "Dog", count: 5 }, { type: "Wolf", count: 5 }, { type: "Dragon", count: 2 }],
        ];
        return waves[waveIndex] || null;
    },

    expandWaveData(waveConfig, level) {
        const result = [];
        waveConfig.forEach(mon => {
            for (let i = 0; i < mon.count; i++) {
                result.push({
                    type: mon.type,
                    level: level
                });
            }
        });
        return result;
    }
});
