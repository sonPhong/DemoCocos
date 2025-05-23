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
        PrefabsCell: cc.Prefab,
        LayoutTable: cc.Layout,
    },

    onLoad(){
        let prefabs = [];
        const fakeData = ['1','2','3','4','5','6','7','8','9','10'];
        for(let i = 0; i<5; i++){
            let prefabCell = cc.instantiate(this.PrefabsCell);
            prefabCell.parent = this.LayoutTable.node;
            prefabs.push(prefabCell);
        };

        fakeData.foreach((data,index) => {
            prefabs[index].getChildByName('Text').getComponent(cc.Label).string = data;
        });
    },
    
});
