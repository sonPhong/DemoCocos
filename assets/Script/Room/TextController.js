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
        textNode: cc.Node,
        checkConvert: {
            default: true,
            visible: false
        },
        checkRotation: {
            default: true,
            visible: false
        },
        rotation: 10,
        speed: 3,
        font1: {
            default: null,
            type: cc.Font,
        },
        font2: {
            default: null,
            type: cc.Font,
        },
        checkConvertFont: {
            default: true,
            visible: false
        },
    },

    changeText() {
        let textComponent = this.textNode.getComponent(cc.Label);
        // let check = true;
        if (this.check) {
            textComponent.overflow = cc.Label.Overflow.NONE;
            textComponent.string = "Hé lô thế giới";
            textComponent.fontSize = 100;
            textComponent.lineHeight = textComponent.fontSize;
            this.textNode.color = cc.Color.RED;
            this.check = false;
        } else {
            textComponent.string = "Hello world";
            textComponent.fontSize = 50;
            this.textNode.color = cc.Color.BLUE;
            textComponent.overflow = cc.Label.Overflow.NONE;
            this.check = true;
        }

    },

    rotationText(dt) {
        // if (this.checkRotation) {
        //     console.log(this.speed);//
        //     this.textNode.angle += this.rotation * this.speed * dt;
        //     console.log(this.textNode.angle);
        //     this.checkRotation = false;
        // }else{
        //     this.textNode.angle = 0;
        //     this.checkRotation = true;
        // }

        console.log(this.speed);//
            this.textNode.angle += this.rotation * this.speed * dt;
            console.log(this.textNode.angle);

    },

    changeFont(){
        let textComponent = this.textNode.getComponent(cc.Label);
        if (this.checkConvertFont) {
            textComponent.font = this.font1;
            this.checkConvertFont = false;
        } else {
            textComponent.font = this.font2;
            this.checkConvertFont = true;
        }
    },

    hiddenText(){
        this.node.parent.active = false;

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {

    },

    update(dt) {
        this.rotationText(dt);
    },
});
