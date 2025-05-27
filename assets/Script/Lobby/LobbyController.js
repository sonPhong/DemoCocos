const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        loginLayout: cc.Node,
        lobbyLayout: cc.Node,
    },
    onLoad() {
        this.showLobby();
    },
    showLobby() {
        this.lobbyLayout.active = true;
        this.loginLayout.active = false;
    },
    showSetting() {
        Emitter.instance.emit("showSetting");
    },
    showLogin() {
        this.loginLayout.active = true;
        this.lobbyLayout.active = false;
        Emitter.instance.emit("hideSetting");
    },
    toggleLogin() {
        if (this.lobbyLayout.active) {
            this.showLogin();
        } else {
            this.showLobby();
        }
    },
    hideSetting() {
        Emitter.instance.emit("hideSetting");
    },
    showRank() {
        Emitter.instance.emit("showRank");
    },
    hideRank() {
        Emitter.instance.emit("hideRank");
    },
});
