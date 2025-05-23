
cc.Class({
    extends: cc.Component,

    properties: {
        PopupSetting: require('PopupItem'),
        PopupRank: require('PopupItem'),
    },

    showSetting() {
        this.PopupSetting.show();
    },

    hideSetting() {
        this.PopupSetting.hide();
    },

    showRank() {
        this.PopupRank.show();
    },

    hideRank() {
        this.PopupRank.hide();
    },



});
