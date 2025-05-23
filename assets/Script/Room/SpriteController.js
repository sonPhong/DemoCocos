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
        nodeSpriteMagic: {
            default: null,
            type: cc.Node,
        },
        img1: {
            default: null,
            type: cc.SpriteFrame,
        },
        img2: {
            default: null,
            type: cc.SpriteFrame,
        },
        flag: true,

        nodeRun: {
            default: null,
            type: cc.Node,
        },
        nodeText: {
            default: null,
            type: cc.Node,
        },
    },

    onChangeSprite() {
        if (this.flag) {
            this.nodeSpriteMagic.getComponent(cc.Sprite).spriteFrame = this.img1;
            this.flag = false;
        } else {
            this.nodeSpriteMagic.getComponent(cc.Sprite).spriteFrame = this.img2;
            this.flag = true;
            //test
        }

    },
    onChangeSizeSprite() {
        this.nodeSpriteMagic.width = this.nodeSpriteMagic.width * 3;
        this.nodeSpriteMagic.height = this.nodeSpriteMagic.height * 3;

    },

    runSprite() {
        this.nodeRun.runAction(cc.sequence(
            cc.moveBy(0.5, 200, 0), // (duration , deltaX, deltaY)
            cc.moveBy(0.5, -200, 0),
            cc.callFunc(this.runSprite, this)
        ));
    },


   onChangeText(){
        let text = this.nodeText.getComponent(cc.Label);
        text.string = "Hello World";
        text.fontFamily = "Arial";
        text.overflow = cc.Label.Overflow.NONE;
        this.nodeText.color = cc.color(255, 7, 7);
   },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.nodeRun.setPosition(0, 0);
    },

    start() {

    },

    update(dt) {
    },
});
