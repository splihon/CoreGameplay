class Coregameplay extends Phaser.Scene {
    constructor() {
        super("Coregameplay");
    }
    preload(){
        this.load.path = './assets';
        this.load.image('roly poly', 'roly_poly.png');
        this.load.image('snails', 'snail.png');

    }

    create() {
        this.rp = this.add.sprite(100, 200, 'roly poly').setScale(1);
        this.keys = game.input.keyboard.createCursorKeys();

        this.snail_1 = this.add.sprite(200, 400, 'snails').setScale(0.1);
        this.snail_2 = this.add.sprite(300, 400, 'snails').setScale(0.1);
    }

    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown) {
            this.rp.setVelocityX(-500); // Move left
        }
        else if (right.isDown) {
            this.rp.setVelocityX(500); // Move left
        }
        else {
            this.rp.setVelocityX(0); // Stand Still
            this.rp.setFrame()
        }
        if (up.isDown && this.rp.body.touching.down) // Player1 Grounded Check
        {
            this.rp.setVelocityY(-600); // Jump
        }
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
