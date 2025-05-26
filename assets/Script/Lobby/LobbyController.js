

cc.Class({
    extends: cc.Component,

    properties: {
        popupController: require('PopupController'),
        loginLayout: cc.Node,
        lobbyLayout: cc.Node,
    },
    onLoad() {
       this.lobbyLayout.active = true;
       this.loginLayout.active = false;
    },

    showSetting() {
        this.popupController.showSetting();
    },

    hideSetting() {
        this.popupController.hideSetting();
    },

    showRank() {
        this.popupController.showRank();
    },

    hideRank() {
        this.popupController.hideRank();
    },

    login() {
        if (this.lobbyLayout.active) {
            this.loginLayout.active = true;
            this.lobbyLayout.active = false;
            this.popupController.onHidePopup();
        } else {
            this.loginLayout.active = false;
            this.lobbyLayout.active = true;
        }
    },
});
