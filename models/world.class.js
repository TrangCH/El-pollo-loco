class World {

    // You no longer need a let within a class, a const or a var.
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 80), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 80), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 80) // constructor(imagePath, x, y)
        
    ];
    ctx;
    canvas;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;     // Greifen auf globale Variable zu. Das rechte canvas wird in das linke reingeschrieben.
        this.draw();

    }



    /**
     * To draw a picture
     */
    draw() {
        /**
         * How to clear canvas for redrawing.
         */
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        /**
         * Add MovableObject, character to map.
         * Pay attention to the order !
         */
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);


        /**
         * The draw method is called as often as the graphics card allows.
         */
        let self = this;
        // This function will only be carried out when all functions above have been carried out.
        requestAnimationFrame(function () {
            self.draw(); // asynchrone
        });

    }

    /**
      * To add multiple objects
      * @param {} objects 
      */
    // addTo, eine forEach-Schleife für mehrere
    addObjectsToMap(objects) { // mehrere Objects (Name der Objektgruppe)
        objects.forEach(o => {
            this.addToMap(o); // Jedes Objekt aus dieser Objecktgruppe wird zu der map hinzugefügt.
        });
    }


    /**
     * To add an object to mao
     * @param {string} mo MovableObject
     */
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}