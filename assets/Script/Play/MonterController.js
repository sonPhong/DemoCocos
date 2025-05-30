cc.Class({
    extends: cc.Component,

    properties: {
        worldNode: cc.Node,
        wolfPrefab: cc.Prefab,
        montersLayer: cc.Node,
        // swordLayer: cc.Node,
        effcetLayer: cc.Node,
        totalWaves: 10,
        enemiesPerWave: 10,
    },

    onLoad() {
        this.currentWave = 0;
        this.scheduleOnce(() => this.spawnNextWave(), 1);
    },

    spawnNextWave() {
        if (this.currentWave >= this.totalWaves) {
            cc.log("Hết wave!");
            return;
        }

        this.currentWave++;
        for (let i = 0; i < this.enemiesPerWave; i++) {
            this.scheduleOnce(() => {
                this.spawnEnemy();
                console.log('quái');
            }, i * 0.5);
        }

        this.scheduleOnce(() => {
            this.spawnNextWave();
            console.log('wave');
        }, this.enemiesPerWave * 0.5 + 4);
    },

    spawnEnemy() {
        const monter = cc.instantiate(this.wolfPrefab);

        const worldAnchorPos = this.worldNode.convertToWorldSpaceAR(cc.Vec2.ZERO); // toạ độ world

        const startX = worldAnchorPos.x * 2 + 30;

        const minY = (worldAnchorPos.y) - 200;
        const maxY = (worldAnchorPos.y) + 100;
        const startY = minY + Math.random() * (maxY - minY);


        const worldPos = cc.v2(startX, startY);
        console.log(`world ${worldPos} - startX ${startX}`);

        const localPos = this.montersLayer.convertToNodeSpaceAR(worldPos);

        console.log('localMon', localPos);

        monter.parent = this.montersLayer;
        monter.setPosition(localPos);

        const script = monter.getComponent("Wolf");
        console.log(this.currentWave, monter.getPosition());
        script.init(this.currentWave);
    }
});
