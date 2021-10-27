class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 300;

    /**
       * This function is always there. In every class. It is always called first of all.
       */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 100 + Math.random() * 2300; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
    }

    /**
    * Switch pictures (motion)
    */
    animate() {
        this.startMoveTo();
    }

    /**
     * Start
     */

    startMoveTo() {
        this.moveToInterval = setInterval(this.moveTo.bind(this), 60);
    }

    /**
    * Switch pictures (motion)
    */
    stopAnimate() {
        this.stopMoveTo();
    }

    /**
     * Stop
     */

    stopMoveTo() {
        clearInterval(this.moveToInterval);
        //TODO
    }

    /**
     * Animation of the moving object
     */
    moveTo() {
        this.moveLeft();
    }
    
}