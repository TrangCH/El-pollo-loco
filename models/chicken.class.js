class Chicken extends MovableObject {

    y = 355;
    height = 75;
    width = 75;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];
    energy = 100;

    /**
    * This function is always there. In every class. It is always called first of all.
    */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING); // Important!

        this.x = 1250 + Math.random() * 1000; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
        this.speed = 0.1 + Math.random() * 1;
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
        this.moveToInterval = setInterval(this.moveTo.bind(this), 60); // 60
    }

    startPlay() {
        this.playInterval = setInterval(this.play.bind(this), 100);
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
    }

    stopPlay() {
        clearInterval(this.playInterval);
    }

    /**
    * Move to the 
    */
    moveTo() {
        this.moveLeft();
    }

    /**
    * Switch pictures (motion)
    */
    play() {
        this.playAnimation(this.IMAGES_WALKING);
         //if(this.isDead) {
         //    this.playAnimation(this.IMAGES_DEAD);
         //}
    }

}