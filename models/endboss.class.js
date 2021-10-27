class Endboss extends MovableObject {

    attack = false;
    speed = 5;
    height = 400;
    width = 275;
    y = 55;
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',

        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    world;


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500; // 2500
        this.speed = 0.1 + Math.random() * 0.25;
        this.animate();
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
        this.moveToInterval = setInterval(this.moveTo.bind(this), 60); // 1000 / 60
    }

    startPlay() {
        this.playInterval = setInterval(this.play.bind(this), 300);
        //this.playIntervalWalking = setInterval(this.playWalking.bind(this), 150);
    }

    /**
    * Switch pictures (motion)
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
        this.world.win = true;
        clearInterval(this.playInterval);
        //clearInterval(this.playIntervalWalking);
        //TODO
    }

    //-----------//

    /**
     * Move to the
     */
    moveTo() {
        // 60 frames per second move to the left (chicken)
        this.moveLeft();
        // 60x per second
    }

    /**
     * Play walking animation
     */
    //playWalking() {
        //setInterval(() => {
      //      this.playAnimation(this.IMAGES_WALKING);
        //}, 150); 
    //}

    /**
     * Play animation
     */
    play() {
        this.playAnimation(this.IMAGES_WALKING);
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(this.stopAnimate(), 5000);
                setTimeout(this.world.character.stopAnimate(), 5000);
                for (let i = 0; i < this.world.level.clouds.length; i++) {
                    const clouds = this.world.level.clouds[i];
                    setTimeout(this.world.level.clouds[i].stopAnimate(), 5000);
                }
                for (let i = 0; i < this.world.level.enemies.length; i++) {
                    const enemies = this.world.level.enemies[i];
                    setTimeout(this.world.level.enemies[i].stopAnimate(), 5000);
                }

                // setTimeout(this.showGameOverScreen(), 3000);
                //} else //if (this.isHurt()) {
                // this.playAnimation(this.IMAGES_HURT);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.attack) {
                this.playAnimation(this.IMAGES_ATTACK);
            }
     // 300
        // setInterval(() => {
        //     if (this.isHurtEndboss()) {
        //         this.playAnimation(this.IMAGES_HURT);
        //     }
        // }, 5000);
    }



    // showGameOverScreen() {
    //     document.getElementById('canvas').src = 'img/9.Intro _ Outro Image/_Game over_ screen/Muestra.png';
    // }

}