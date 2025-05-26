cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: require('PopupItem'),
        popupRank: require('PopupItem'),
    },

    showSetting() {
        this.onHidePopup();
        this.popupSetting.show();
    },

    hideSetting() {
        this.popupSetting.hide();
    },

    showRank() {
        this.onHidePopup();
        this.popupRank.show();
    },

    hideRank() {
        this.popupRank.hide();
    },

    onHidePopup(){
        this.hideSetting();
        this.hideRank();
    },
});
