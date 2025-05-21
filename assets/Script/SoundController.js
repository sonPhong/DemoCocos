// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        soundBGM: {
            type: cc.AudioClip,
            default: null
        },
        soundClick: {
            type: cc.AudioClip,
            default: null
        },
    },

    onLoad() {
        this.playBGM();
    },

    playBGM() {
        console.log("play sound");
        cc.audioEngine.play(this.soundBGM, false, 1);
    },

    playSoundClick() {
        console.log("play soundClick");
        cc.audioEngine.play(this.soundClick, false, 1);
    }


});
