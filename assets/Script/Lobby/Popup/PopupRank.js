cc.Class({
    extends: require('PopupItem'),

    properties: {
        prefabCell: cc.Prefab,
        layoutTable: cc.Layout,
        cellList: [cc.Node],
    },

    onLoad() {
        this._super();
        this.initCells();
    },

    initCells() {
        this.cellList = [];
        for (let i = 0; i < 10; i++) {
            let cell = cc.instantiate(this.prefabCell);
            cell.parent = this.layoutTable.node;
            this.cellList.push(cell);
        }
    },

    initTopRank() {
        const topRankData = this.getTopRankData(10);

        this.cellList.forEach((cell, index) => {
            const data = topRankData[index];
            const cellScript = cell.getComponent('CellController');

            if (cellScript && data) {
                cellScript.updateData(data);
            }
        });
    },

    getTopRankData(limitData) {
        return this.getFakeData().sort((a, b) => b.idRank - a.idRank).slice(0, limitData);
    },


    getFakeData() {
        return [
            { name: 'An', idRank: 3, rank: 'Gold' },
            { name: 'Bình', idRank: 2, rank: 'Silver' },
            { name: 'Chi', idRank: 1, rank: 'Bronze' },
            { name: 'Dũng', idRank: 2, rank: 'Silver' },
            { name: 'Hà', idRank: 4, rank: 'Platinum' },
            { name: 'Lan', idRank: 1, rank: 'Bronze' },
            { name: 'Minh', idRank: 1, rank: 'Bronze' },
            { name: 'Ngọc', idRank: 5, rank: 'Diamond' },
            { name: 'Quân', idRank: 2, rank: 'Silver' },
            { name: 'Trang', idRank: 1, rank: 'Bronze' },
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
});
