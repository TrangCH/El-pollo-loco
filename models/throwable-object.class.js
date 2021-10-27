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
        this.play();
        //this.animate();
    }

    animate() {
        this.startMoveTo();
        this.startPlay();
    }

    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 25);
    }
    startPlay() {
        this.playInterval = setInterval(this.play.bind(this), 150);
    }

    stopAnimate() {
        this.stopMoveTo();
        this.stopPlay();
    }

    stopMoveTo() {
        clearInterval(this.moveToInterval);
        //TODO
    }
    stopPlay() {
        clearInterval(this.playInterval);
        //TODO
    }

    moveTo() {
        this.throw();
    }

    throw() {
        this.speedY = 25; // 30
        this.applyGravity();
        setInterval(() => {
            this.x += 8; // 10
        }, 25);
    }



    //throwX() {
    //    this.x += 8; // 10
    //}

    play() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_FLYING);
        }, 150); // 50
    }
}