cc.Class({
    extends: cc.Component,

    properties: {
        layout: cc.Node,
        wolf: cc.Prefab,
        twoHeadedWolf: cc.Prefab,
        dragon: cc.Prefab,
        totalWaves: {
            default: 10,
            visible: false,
        },
    },

    onLoad() {
        this.currentWave = 0;
        this.startNextWave();
    },

    startNextWave() {
        if (this.currentWave >= this.totalWaves) {
            console.log("✅ Kết thúc tất cả các wave");
            return;
        }

        this.currentWave++;
        const level = this.getLevelByWave(this.currentWave);
        const monsterCount = 15;

        for (let i = 0; i < monsterCount; i++) {
            this.scheduleOnce(() => {
                this.spawnMonster(level);
            }, i * 1); // sinh từng con cách nhau 0.1s
        }

        // Gọi wave tiếp theo sau delay (ví dụ 5s)
        this.scheduleOnce(() => {
            this.startNextWave();
        }, 20);
    },

    getLevelByWave(wave) {
        if (wave <= 2) return 1;
        return 1 + (wave - 2);
    },

    spawnMonster(level) {
        let prefab;
        let monsterType = Math.floor(Math.random() * 3); // 0,1,2

        switch (monsterType) {
            case 0: prefab = this.wolf; break;
            case 1: prefab = this.twoHeadedWolf; break;
            case 2: prefab = this.dragon; break;
        }

        const monster = cc.instantiate(prefab);

        // Set vị trí khởi đầu: ngoài cùng bên phải màn hình
        const startX = cc.winSize.width / 2 + 100;
        const y = this.getRandomYFixed();
        monster.setPosition(startX, y);

        this.layout.addChild(monster); // layout ở đây chỉ là container
        const script = monster.getComponent('CharItem');
        script && script.init(level);
    },

    getRandomYFixed() {
        const options = [300, 500, 700, 900];
        const index = Math.floor(Math.random() * options.length);
        return options[index];
    }
});
