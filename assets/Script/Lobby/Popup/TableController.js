cc.Class({
    extends: cc.Component,

    properties: {
        prefabCell: cc.Prefab,
        layoutTable: cc.Layout,
    },

    onLoad() {
        const fakeData = [
            { name: 'Alice', idrank: 1, rank: 'Bronze' },
            { name: 'Bob', idrank: 2, rank: 'Silver' },
            { name: 'Charlie', idrank: 3, rank: 'Gold' },
            { name: 'David', idrank: 4, rank: 'Platinum' },
            { name: 'Eve', idrank: 5, rank: 'Diamond' },
            { name: 'Frank', idrank: 6, rank: 'Master' },
            { name: 'Grace', idrank: 7, rank: 'Grandmaster' },
            { name: 'Hank', idrank: 8, rank: 'Legend' },
            { name: 'Ivy', idrank: 9, rank: 'Mythic' },
            { name: 'Jack', idrank: 10, rank: 'Immortal' }
        ];

        for (let i = 0; i < fakeData.length; i++) {
            let cell = cc.instantiate(this.prefabCell);
            cell.parent = this.layoutTable.node;
            const data = fakeData[i];
            cell.getChildByName('Text').getComponent(cc.Label).string = `${data.name} ${data.idrank} ${data.rank}`;
        };

    },

});
