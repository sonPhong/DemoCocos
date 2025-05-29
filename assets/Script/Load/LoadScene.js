const EventKey = require('EventKey');
const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        progressBar: cc.ProgressBar,
        statusLabel: cc.Label,
    },

    onLoad() {
        this.setProgressUIVisible(false);
        this._onLoadScene = this.loadScene.bind(this);
        Emitter.instance.registerEvent(EventKey.LOAD_SCENE, this._onLoadScene);
    },

    onDestroy() {
        Emitter.instance.removeEvent(EventKey.LOAD_SCENE, this._onLoadScene);
    },

    setProgressUIVisible(isVisible) {
        if (this.progressBar) this.progressBar.node.active = isVisible;
        if (this.statusLabel) this.statusLabel.node.active = isVisible;
    },

    updateProgressUI(progress) {
        if (this.progressBar) {
            this.progressBar.progress = progress;
        }
        if (this.statusLabel) {
            this.statusLabel.string = `Đang tải ${Math.floor(progress * 100)}%`;
        }
    },

    setProgressLabel(text) {
        if (this.statusLabel) {
            this.statusLabel.string = text;
        }
    },

    loadScene(data) {
        if (!data || !data.name) {
            console.warn("Không có scene");
            return;
        }

        const nameScene = data.name;
        console.log(`Bắt đầu preload scene: ${nameScene}`);
        this.setProgressUIVisible(true);

        cc.director.preloadScene(
            nameScene,
            (completedCount, totalCount) => {
                let progress = completedCount / totalCount;
                this.updateProgressUI(progress);
            },
            () => {
                this.setProgressLabel("Tải xong!");
                this.scheduleOnce(() => {
                    this.setProgressUIVisible(false);
                    cc.director.loadScene(nameScene);
                }, 0.3);
            }
        );
    },
});
