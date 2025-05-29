cc.Class({
    extends: cc.Component,

    properties: {
        wolfPrefab: cc.Prefab,
        enemyLayer: cc.Node,
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
        const enemy = cc.instantiate(this.wolfPrefab);
        enemy.parent = this.enemyLayer;

        const startX = cc.winSize.width / 2 + 100;

        const minY = -200;
        const maxY = 200;
        const startY = minY + Math.random() * (maxY - minY);

        enemy.setPosition(startX, startY);

        const script = enemy.getComponent("Wolf");
        console.log(this.currentWave);
        script.init(this.currentWave);
    }
});
