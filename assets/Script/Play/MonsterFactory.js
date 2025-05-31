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
    },

    createMonster(type, parent, level = 1) {
        const prefab = this.getPrefabByType(type);
        if (!prefab) {
            cc.error("Prefab không tồn tại:", type);
            return null;
        }

        const monster = cc.instantiate(prefab);
        monster.parent = parent;

        // fix lại theo toạ độ thế giới
        const y = -200 + Math.random() * 400;
        monster.setPosition(cc.winSize.width / 2 + 100, y);

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
