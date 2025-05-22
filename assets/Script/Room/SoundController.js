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
            default: null,
            type: cc.AudioClip,
        },
        soundClick: {
            default: null,
            type: cc.AudioClip,
        },
        checkSound: {
            default: true,
            visible: false,
        },
        volumeSet: 0.1,
        upVolumeNew: 0.1,
        downVolumeNew: 0.1,
    },

    BGMSound() {
        this.playSoundBGM = cc.audioEngine.play(this.soundBGM, true, 0.5);
    },

    ClickSound() {
        cc.audioEngine.play(this.soundClick, false, 1);

        if (this.checkSound) {
            cc.audioEngine.pause(this.playSoundBGM);
            this.checkSound = false;
            console.log("1");
        } else {
            cc.audioEngine.resume(this.playSoundBGM);
            this.checkSound = true;
            console.log("2");
        }
    },

    hiddenSound() {
        this.node.parent.active = false;
    },

    setVolume() {
        console.log("testSet");
        cc.audioEngine.setVolume(this.playSoundBGM, this.volumeSet); // id được tạo từ trên lấy cái sound cần đổi, số mún giảm
        console.log("testSet");
    },

    upVol() {
        console.log("testUp");
        let vol = cc.audioEngine.getVolume(this.playSoundBGM);
        console.log(vol);
        // Math.round(vol += this.upVolumeNew);
        Math.abs(vol += this.upVolumeNew);
        console.log(vol);
        cc.audioEngine.setVolume(this.playSoundBGM, vol);
        // console.log("testUp");
    },

    downVol() {
        console.log("testDown");
        let vol = cc.audioEngine.getVolume(this.playSoundBGM);
        console.log(vol);
        // Math.round(vol += this.upVolumeNew);
        Math.abs(vol -= this.upVolumeNew);
        console.log(vol);
        cc.audioEngine.setVolume(this.playSoundBGM, vol);
        console.log("testDown");
    },



    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.BGMSound();
    },

    start() {

    },

    // update (dt) {},
});
