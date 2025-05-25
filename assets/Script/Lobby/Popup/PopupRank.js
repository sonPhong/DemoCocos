cc.Class({
    extends: require('PopupItem'),

    properties: {
        prefabCell: cc.Prefab,
        layoutTable: cc.Layout,
    },

    onLoad() {
        this._super();
        const fakeData = [
            { name: 'An', idrank: 3, rank: 'Gold' },
            { name: 'Bình', idrank: 1, rank: 'Bronze' },
            { name: 'Chi', idrank: 5, rank: 'Diamond' },
            { name: 'Dũng', idrank: 2, rank: 'Silver' },
            { name: 'Hà', idrank: 4, rank: 'Platinum' },
            { name: 'Lan', idrank: 1, rank: 'Bronze' },
            { name: 'Minh', idrank: 3, rank: 'Gold' },
            { name: 'Ngọc', idrank: 5, rank: 'Diamond' },
            { name: 'Quân', idrank: 2, rank: 'Silver' },
            { name: 'Trang', idrank: 4, rank: 'Platinum' }
        ];

        fakeData.sort((a, b) => b.idrank - a.idrank);

        for (let i = 0; i < fakeData.length; i++) {
            let cell = cc.instantiate(this.prefabCell);
            cell.parent = this.layoutTable.node;
            const data = fakeData[i];
            cell.getChildByName('Text').getComponent(cc.Label).string = `${data.name} ${data.rank}`;
        };

    },
});
