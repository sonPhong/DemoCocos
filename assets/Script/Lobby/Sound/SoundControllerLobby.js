cc.Class({
    extends: cc.Component,

    properties: {
        soundMusic: {
            default: null,
            type: cc.AudioClip,
        },
        soundFx: {
            default: null,
            type: cc.AudioClip,
        },
        flag: true,
    },



    onLoad() {
        this.playMusic();
    },

    playMusic() {
        this.music = cc.audioEngine.play(this.soundMusic, true, 1);
    },

    stopMusic() {
        cc.audioEngine.pause(this.music);
    },
    playFx() {
        if (this.flag) {
            this.fx = cc.audioEngine.play(this.soundFx, false, 1);
        } else {
            cc.audioEngine.stop(this.fx);
        }
    },

});
