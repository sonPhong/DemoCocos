const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require('PopupItem'),
        popupRank: require('PopupItem'),
    },

    onLoad() {
        this.registerPopupEvents();
    },

    showSetting() {
        this.hideAllPopups();
        this.popupSetting.show();
    },

    hideSetting() {
        this.popupSetting.hide();
    },

    showRank() {
        this.popupRank.initTopRank();
        this.hideAllPopups();
        this.popupRank.show();
    },

    hideRank() {
        this.popupRank.hide();
    },

    hideAllPopups() {
        this.hideSetting();
        this.hideRank();
    },

    registerPopupEvents() {
        Emitter.instance.registerEvent("showSetting", this.showSetting.bind(this));
        Emitter.instance.registerEvent("hideSetting", this.hideSetting.bind(this));
        Emitter.instance.registerEvent("showRank", this.showRank.bind(this));
        Emitter.instance.registerEvent("hideRank", this.hideRank.bind(this));
    },

    onDestroy() {
        Emitter.instance.removeEvent("showSetting", this.showSetting.bind(this));
        Emitter.instance.removeEvent("hideSetting", this.hideSetting.bind(this));
        Emitter.instance.removeEvent("showRank", this.showRank.bind(this));
        Emitter.instance.removeEvent("hideRank", this.hideRank.bind(this));
    },
});
