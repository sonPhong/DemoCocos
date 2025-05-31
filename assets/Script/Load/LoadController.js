const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {


    },
    sceneLobby() {
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'Lobby' });
    },
    sceneLogin() {
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'Load' });
    },
    scenePlay() {
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'RoomPlay' });
    },
});
