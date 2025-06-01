const PrefabMap = {
    "Dog": "Dog",
    "Wolf": "Wolf",
    "Dragon": "Dragon"
};

cc.Class({
    extends: cc.Component,

    properties: {
        prefabList: [cc.Prefab],
        monterControl: require('MonsterController'),
        monsterLayer: cc.Node,
    },

    createMonster(type, parent, level = 1) {
        const prefab = this.getPrefabByType(type);
        if (!prefab) {
            cc.error("Prefab không tồn tại:", type);
            return null;
        }

        // convert to world
        const worldPos = this.monsterLayer.parent.convertToWorldSpaceAR(cc.Vec2.ZERO);

        const startX = cc.winSize.width + 50;

        const minY = worldPos.y + 200;
        const maxY = worldPos.y - 300;
        const startY = minY + Math.random() * (maxY - minY);

        // createPos
        const convertPos = cc.v2(startX, startY);

        const monster = cc.instantiate(prefab);
        monster.parent = parent;

        // convert to node
        const localPos = monster.parent.convertToNodeSpaceAR(convertPos);

        monster.setPosition(localPos);

        const script = monster.getComponent(PrefabMap[type]);
        script.init(level);

        // set id + type
        script.type = type;
        script.id = this._generateUniqueId();

        this.monterControl.add(monster);
        return monster;
    },

    getPrefabByType(type) {
        return this.prefabList.find(prefab => prefab.name === type);
    },

    _generateUniqueId() {
        return 'mon_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    }
});
