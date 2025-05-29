const EventKey = require('EventKey');
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
    
    showLogin() {
        this.loginLayout.active = true;
        this.lobbyLayout.active = false;
        Emitter.instance.emit(EventKey.HIDE_SETTING_POPUP);
    },
    toggleLogin() {
        if (this.lobbyLayout.active) {
            this.showLogin();
        } else {
            this.showLobby();
        }
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

    loadSLoad(){
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'Load' });
        // console.log('bắn');
    },
    loadSRoom(){
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'RoomPlay' }); 
    },
});
