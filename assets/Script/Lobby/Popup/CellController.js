cc.Class({
    extends: cc.Component,

    properties: {
        nameLabel: cc.Label,
        rankLabel: cc.Label,
        sprite: cc.Sprite,
        platinum: cc.SpriteFrame,
        diamond: cc.SpriteFrame,
        gold: cc.SpriteFrame,
        silver: cc.SpriteFrame,
        bronze: cc.SpriteFrame,
    },

    // onLoad() {
    //     this.rankSpriteMap = this.getRankSpriteMap();
    // },

    updateData(data) {
        const rankSpriteMap = this.getRankSpriteMap();
        this.nameLabel.string = data.name;
        this.rankLabel.string = data.rank;
        // console.log('idRank:', data.idRank, '-> sprite:', rankSpriteMap.get(data.idRank));
        this.sprite.spriteFrame = rankSpriteMap.get(data.idRank) || null;
    },

    getRankSpriteMap() {
        return new Map([
            [1, this.bronze],
            [2, this.silver],
            [3, this.gold],
            [4, this.platinum],
            [5, this.diamond],
        ])
    },
});
