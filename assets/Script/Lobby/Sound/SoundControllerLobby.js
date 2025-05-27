const Emitter = require("Emitter");

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
        this.registerSoundEvent();
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
        }
    },
    changeMusic(data) {
        if (data) {
            this.playMusic();
        } else {
            this.stopMusic();
        }
    },
    changeFlag(data) {
        this.flag = data;
    },
    setVoulme(data) {
        cc.audioEngine.setVolume(this.music, data);
    },


    registerSoundEvent() {
        Emitter.instance.registerEvent("onMusic", this.changeMusic.bind(this));
        Emitter.instance.registerEvent("onFx", this.changeFlag.bind(this));
        Emitter.instance.registerEvent("setVolume", this.setVoulme.bind(this));
    },
});
