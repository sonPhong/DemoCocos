const EventKey = require('EventKey');
const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        progressBar: cc.ProgressBar,
        statusLabel: cc.Label,
    },

    onLoad() {
        this._onLoadScene = this.loadScene.bind(this);
        Emitter.instance.registerEvent(EventKey.LOAD_SCENE, this._onLoadScene);
    },



    onDestroy() {
        Emitter.instance.removeEvent(EventKey.LOAD_SCENE, this._onLoadScene);
    },

    loadScene(data) {
        if (!data || !data.name) {
            console.warn("Không có tên scene được truyền vào:", data);
            return;
        }

        const nameS = data.name;
        console.log(`Bắt đầu preload scene: ${nameS}`);

        cc.director.preloadScene(
            nameS,
            (completedCount, totalCount) => {
                let progress = completedCount / totalCount;
                // this.progressBar.progress = progress;
                this.statusLabel.string = `Đang tải ${Math.floor(progress * 100)}%`;
            },
            () => {
                this.statusLabel.string = "Tải xong!";
                this.scheduleOnce(() => {
                    cc.director.loadScene(nameS);
                }, 0.3); // delay nhẹ để cảm nhận
            }
        );
    },
});
