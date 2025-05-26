cc.Class({
    extends: require('PopupItem'),

    properties: {
        soundController: cc.Node,
        toggleMusic: cc.Toggle,
        toggleSoundFx: cc.Toggle,
    },


    onLoad() {
        this._super();
        this.toggleMusic.node.on('toggle', this.onToggleMusic, this);
        this.toggleSoundFx.node.on('toggle', this.onToggleSoundFx, this);
    },

    onToggleMusic(toggle) {
        if (toggle.isChecked) {
            this.soundController.getComponent('SoundControllerLobby').playMusic();
        } else {
            this.soundController.getComponent('SoundControllerLobby').stopMusic();
        }
    },
    onToggleSoundFx(toggle) {
        if (toggle.isChecked) {
            this.soundController.getComponent('SoundControllerLobby').flag = true;
        } else {
            this.soundController.getComponent('SoundControllerLobby').flag = false;
        }
    },
    openFacebook() {
        window.open('https://facebook.com', '_blank');
    },
    openGoogle() {
        window.open('https://google.com', '_blank');
    }
});
