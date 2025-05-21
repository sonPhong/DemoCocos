// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { type } = require("os");

cc.Class({
    extends: cc.Component,

    properties: {
        node1: {
            default: null,
            type: cc.Node
        },
        node2: {
            default: null,
            type: cc.Node
        },

    },

    onLoad() {
         this.node1.active = false;
        console.log("node1", this.node1);
        console.log(this.node1.children);
        console.log("node2", this.node2);
        console.log(this.node2.children);
    },

    start() {

    },

    update(dt) { },
});
