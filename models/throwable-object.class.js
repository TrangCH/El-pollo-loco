class ThrowableObject extends MovableObject {

    IMAGES_FLYING = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_FLYING);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 55;
        this.throw();
        this.animate();
    }


    throw() {
        this.speedY = 25; // 30
        this.applyGravity();
        setInterval(() => {
            this.x += 8; // 10
        }, 25);
    }

    animate() {
        setInterval(() => {
           this.playAnimation(this.IMAGES_FLYING);
        }, 150); // 50
    }
}