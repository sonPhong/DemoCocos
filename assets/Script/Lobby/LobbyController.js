

cc.Class({
    extends: cc.Component,

    properties: {
        PopupController: require('PopupController'),
    },

    showSetting(){
        this.PopupController.showSetting();
    },

    hideSetting(){
        this.PopupController.hideSetting();
    },
    
    showRank(){
        this.PopupController.showRank();
    },

    hideRank(){
        this.PopupController.hideRank();
    },
    
    
});
