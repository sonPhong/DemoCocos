cc.Class({
    extends: cc.Component,

    properties: {
        prefab: cc.Prefab,
        layout: cc.Layout,
        spine: sp.Skeleton,
        buttonList: [cc.Node],
    },

    onLoad(){
        this.initButton();
    },

    initButton(){
        this.buttonList = [];

        this.listAnimation = this.spine._skeleton.data.animations;

        for (let i = 0; i < this.listAnimation.length; i++) {
            let button = cc.instantiate(this.prefab);

            let animationName = this.listAnimation[i].name;

            button.getChildByName('Label').getComponent(cc.Label).string = animationName;
            button.parent = this.layout.node;
            this.buttonList.push(button);

            
            button.getComponent(cc.Button).node.on('click', this.onButtonClick.bind(this, animationName), this);
        }
    },

    onButtonClick(animationName) {
        this.spine.setAnimation(0, animationName, true);
    },

    onDestroy(){
        for (let button of this.buttonList) {
            button.destroy();
        }

        this.buttonList = [];
    }
});
