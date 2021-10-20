class Character extends MovableObject {

    speed = 5;
    height = 250;
    y = 30;


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
        this.animate();

    }

    /**
     * Switch pictures (motion)
     */
    animate() {

        setInterval(() => {
            // this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                this.moveRight();
                this.otherDirection = false;
                // this.walking_sound.play();
            }
            // Nach links nur, wenn x größer 0
            if (this.world.keyboard.LEFT && this.x > 0) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                this.moveLeft();
                this.otherDirection = true;
                // this.walking_sound.play();
            }

            // Wenn die Taste UP gedrückt wird, dann setze soeedY auf 20.
            if (this.world.keyboard.SPACE && !this.isAboveGround()) { // ! bdeutet nicht
                this.jump(); //  (CleanCoding)
            }

            this.world.camera_x = -this.x + 100; // + 100 in x-Richtung
        }, 1000 / 60); // 60 mal pro Sekunde


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.world.loose = true;
                // setTimeout(this.showGameOverScreen(), 3000);
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
        }, 50); // 50

    }

    // showGameOverScreen() {
    //     document.getElementById('canvas').src = 'img/9.Intro _ Outro Image/_Game over_ screen/Muestra.png';
    // }


    /**
    * to jump (CleanCoding)
    */
    jump() {
        this.speedY = 30;
    }


}