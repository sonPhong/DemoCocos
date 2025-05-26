cc.Class({
    extends: require('PopupItem'),

    properties: {
        prefabCell: cc.Prefab,
        layoutTable: cc.Layout,
        platinum: cc.SpriteFrame,
        diamond: cc.SpriteFrame,
        gold: cc.SpriteFrame,
        silver: cc.SpriteFrame,
        bronze: cc.SpriteFrame,
    },

    onLoad() {
        this._super();
        const fakeData = this.getFakeData();
        const rankSpriteMap = this.getRankSpriteMap();

        fakeData.sort((a, b) => b.idRank - a.idRank);

        fakeData.forEach(data => {
            const cell = cc.instantiate(this.prefabCell);
            cell.parent = this.layoutTable.node;

            this.setCellData(cell, data, rankSpriteMap.get(data.idRank));
        });
    },
    getFakeData() {
        return [
            { name: 'An', idRank: 3, rank: 'Gold' },
            { name: 'Bình', idRank: 5, rank: 'Diamond' },
            { name: 'Chi', idRank: 1, rank: 'Bronze' },
            { name: 'Dũng', idRank: 2, rank: 'Silver' },
            { name: 'Hà', idRank: 4, rank: 'Platinum' },
            { name: 'Lan', idRank: 1, rank: 'Bronze' },
            { name: 'Minh', idRank: 3, rank: 'Gold' },
            { name: 'Ngọc', idRank: 5, rank: 'Diamond' },
            { name: 'Quân', idRank: 2, rank: 'Silver' },
            { name: 'Trang', idRank: 4, rank: 'Platinum' },
            { name: 'Hưng', idRank: 2, rank: 'Silver' },
            { name: 'Thảo', idRank: 3, rank: 'Gold' },
            { name: 'Vân', idRank: 1, rank: 'Bronze' },
            { name: 'Tùng', idRank: 5, rank: 'Diamond' },
            { name: 'Khánh', idRank: 4, rank: 'Platinum' },
            { name: 'Yến', idRank: 3, rank: 'Gold' },
            { name: 'Phúc', idRank: 2, rank: 'Silver' },
            { name: 'Giang', idRank: 1, rank: 'Bronze' },
            { name: 'Thành', idRank: 5, rank: 'Diamond' },
            { name: 'Linh', idRank: 4, rank: 'Platinum' },
            { name: 'Khoa', idRank: 1, rank: 'Bronze' },
            { name: 'My', idRank: 3, rank: 'Gold' },
            { name: 'Đạt', idRank: 2, rank: 'Silver' },
            { name: 'Tiến', idRank: 4, rank: 'Platinum' },
            { name: 'Trâm', idRank: 5, rank: 'Diamond' }
        ];
    },
    getRankSpriteMap() {
        return new Map([
            [5, this.platinum],
            [4, this.diamond],
            [3, this.gold],
            [2, this.silver],
            [1, this.bronze],
        ])
    },
    setCellData(cell, data, spriteFrame) {
        const nameLabel = cell.getChildByName('Name').getComponent(cc.Label);
        const rankLabel = cell.getChildByName('Rank').getComponent(cc.Label);
        const sprite = cell.getChildByName('Sprite').getComponent(cc.Sprite);

        nameLabel.string = data.name;
        rankLabel.string = data.rank;
        sprite.spriteFrame = spriteFrame || null;
    }
});
