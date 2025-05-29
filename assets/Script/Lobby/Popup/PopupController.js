const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require('PopupItem'),
        popupRank: require('PopupItem'),
    },

    onLoad() {
        this.initEventsMap();
        this.registerPopupEvents();
    },

    initEventsMap() {
        this.eventsMap = {
            [EventKey.SHOW_SETTING_POPUP]: this.showSetting.bind(this),
            [EventKey.SHOW_RANK_POPUP]: this.showRank.bind(this),
            [EventKey.HIDE_SETTING_POPUP]: this.hideSetting.bind(this),
            [EventKey.HIDE_RANK_POPUP]: this.hideRank.bind(this)
        };
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
        Emitter.instance.registerEventsMap(this.eventsMap);
    },

    onDestroy() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    },
});
