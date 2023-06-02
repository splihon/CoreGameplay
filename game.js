class Coregameplay extends Phaser.Scene {
    constructor() {
        super("Coregameplay");
    }
    preload(){
        this.load.path = './assets';
        this.load.image('roly poly', 'roly poly.png');
        this.load.image('snails', 'snails.png');

    }

    create() {
        this.rp = this.add.sprite(50, 400, 'roly poly').setScale(0.1);
        
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1300,
    height: 1070,
    scene: [Coregameplay],
    title: "Roly Poly to the End",
    physics: {
        default: 'arcade'
    }
};

const game = new Phaser.Game(config);