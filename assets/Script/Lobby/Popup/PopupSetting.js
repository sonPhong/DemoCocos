const Emitter = require('Emitter');

cc.Class({
    extends: require('PopupItem'),

    properties: {
        toggleMusic: cc.Toggle,
        toggleSoundFx: cc.Toggle,
        slider: cc.Slider,
    },

    onLoad() {
        this._super();
        this.onSliderChange();
        this.registerEvents();
    },
    registerEvents() {
        this.toggleMusic.node.on('toggle', this.onToggleMusic, this);
        this.toggleSoundFx.node.on('toggle', this.onToggleSoundFx, this);
        this.slider.node.on('slide', this.onSliderChange, this);
    },

    onToggleMusic(toggle) {
        Emitter.instance.emit('onMusic', toggle.isChecked);
    },
    onToggleSoundFx(toggle) {
        Emitter.instance.emit('onFx', toggle.isChecked);
    },
    openFacebook() {
        window.open('https://facebook.com', '_blank');
    },
    openGoogle() {
        window.open('https://google.com', '_blank');
    },

    // Create Slider Focus width of prgress
    onSliderChange() {
        let value = this.slider.progress;
        this.updateSliderVisual();
        Emitter.instance.emit('setVolume', value);
    },

    updateSliderVisual() {
        const focus = this.slider.node.getChildByName('Focus');
        focus.width = this.slider.node.width * this.slider.progress;
    },
});
