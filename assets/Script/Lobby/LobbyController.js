const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        lobbyLayout: cc.Node,
    },
    onLoad() {
        this.showLobby();
    },
    showLobby() {
        this.lobbyLayout.active = true;
    },
    showSetting() {
        Emitter.instance.emit(EventKey.SHOW_SETTING_POPUP);
    },
    hideSetting() {
        Emitter.instance.emit(EventKey.HIDE_SETTING_POPUP);
    },
    showRank() {
        Emitter.instance.emit(EventKey.SHOW_RANK_POPUP);
    },
    hideRank() {
        Emitter.instance.emit(EventKey.HIDE_RANK_POPUP);
    },

    
});
