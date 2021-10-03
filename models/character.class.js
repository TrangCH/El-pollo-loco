class Character extends MovableObject {

    speed = 5;
    height = 250;
    y = 185;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    world;
    // walking_sound = new Audio('audio/running.mp3');

    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();

    }

    /**
     * Switch pictures (motion)
     */
    animate() {

        setInterval(() => {
            // this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                this.x += this.speed; // Um x Pixel pro Sekunde nach rechts.
                this.otherDirection = false;
                // this.walking_sound.play();
            }
            // Nach links nur, wenn x größer 0
            if (this.world.keyboard.LEFT && this.x > 0) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                this.x -= this.speed; // Um x Pixel pro Sekunde nach rechts.
                this.otherDirection = true;
                // this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100; // + 100 in x-Richtung
        }, 1000 / 60); // 60 mal pro Sekunde


        setInterval(() => { // Ein logisches Oder  ||
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // Wenn die Taste rechts gedrückt wird, dann soll Folgendes passieren:
                
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);

    }


    /**
     * To jump
     */
    jump() {

    }


}