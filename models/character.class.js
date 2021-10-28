class Character extends MovableObject {

    speed = 5;
    height = 250;
    y = 30;
    //lastIdle = new Date().getTime();
    moveToInterval;
    playInterval;
    otherDirection;

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',

        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',

        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    world;
    // walking_sound = new Audio('audio/running.mp3');

    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        //this.animate();
    }

    /**
     * Switch pictures (motion)
     */
    animate() {
        this.startMoveTo();
        this.startPlay();
    }

    /**
     * Start
     */

    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 1000 / 60);
    }

    startPlay() {
        this.playInterval = setInterval(this.play.bind(this), 50);
    }

    /**
    * Stop switch pictures (motion)
    */
    stopAnimate() {
        this.stopMoveTo();
        this.stopPlay();
    }
    /**
     * Stop
     */

    stopMoveTo() {
        clearInterval(this.moveToInterval);
        //TODO
    }

    stopPlay() {
        this.world.loose = true;
        clearInterval(this.playInterval);
        //TODO
    }

    //animate() {

    /**
     * Move to the...
     */
    moveTo() {
        this.moveToTheRight();
        this.moveToTheLeft();
        this.jumpIfThisIsAboveGround();
        this.world.camera_x = -this.x + 100; // + 100 in x-Richtung
    }

    moveToTheRight() {
        // this.walking_sound.pause();
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
            this.moveRight();
            this.otherDirection = false;
            // this.walking_sound.play();
        }
    }

    moveToTheLeft() {
         // Nach links nur, wenn x größer 0
         if (this.world.keyboard.LEFT && this.x > 0) { // Wenn die Taste links gedrückt wird, dann soll Folgendes passieren:
            this.moveLeft();
            this.otherDirection = true;
            // this.walking_sound.play();
        }
    }

    jumpIfThisIsAboveGround() {
        // Wenn die Taste UP gedrückt wird, dann setze speedY auf 30.
        if (this.world.keyboard.SPACE && !this.isAboveGround()) { // ! bdeutet nicht
            this.jump(); //  (CleanCoding)
        }
    }

    /**
     * Play animation 
     */
    play() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) { // Immer, wenn er über dem Boden ist, spiele diese Animationen ab.
            this.playAnimation(this.IMAGES_JUMPING);
        } else {
            // Ein logisches Oder  ||
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }

    /**
    * to jump (CleanCoding)
    */
    jump() {
        this.speedY = 30;
    }

}