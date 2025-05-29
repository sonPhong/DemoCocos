const EventKey = require('EventKey');
const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {


    },
    loadLogin() {
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'Lobby' });
    },
    loadSLoad(){
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'Load' });
    },
    loadSRoom(){
        Emitter.instance.emit(EventKey.LOAD_SCENE, { name: 'RoomPlay' }); 
    },
});
