const EventKey = require('EventKey');
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
        checkEnable: true,
    },

    onLoad() {
        this.initEventsMap();
        this.playMusic();
        this.registerSoundEvent();
    },
    initEventsMap() {
        this.eventsMap = {
            [EventKey.ON_MUSIC_POPUP]: this.changeMusic.bind(this),
            [EventKey.ON_SOUND_FX_POPUP]: this.enableSound.bind(this),
            [EventKey.SET_VOLUME_SETTING_POPUP]: this.setVoulme.bind(this)
        };
    },

    playMusic() {
        this.music = cc.audioEngine.play(this.soundMusic, true, 1);
    },

    stopMusic() {
        cc.audioEngine.pause(this.music);
    },
    playFx() {
        if (this.checkEnable) {
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
    enableSound(data) {
        this.checkEnable = data;
    },
    setVoulme(data) {
        cc.audioEngine.setVolume(this.music, data);
    },


    registerSoundEvent() {
        Emitter.instance.registerEventsMap(this.eventsMap);
    },


    onDestroy() {
        Emitter.instance.removeEventsMap(this.eventsMap);
    }
});
