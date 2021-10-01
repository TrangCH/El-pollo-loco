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
        // 1.
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0), // constructor(imagePath, x, y)
       
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719), // constructor(imagePath, x, y)

        // 2
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 *2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 *2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 *2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 *2), // constructor(imagePath, x, y)
       
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3) // constructor(imagePath, x, y)
    ];
    ctx;
    canvas;
    keyboard;
    camera_x = 0; // Wir wollen es nach rechts verschieben.

    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;     // Greifen auf globale Variable zu. Das rechte canvas wird in das linke reingeschrieben.
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }

    setWorld() {
        this.character.world = this;
    }


    /**
     * To draw a picture
     */
    draw() {
        /**
         * How to clear canvas for redrawing.
         */
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // Gesamten Kontext verschieben.

        /**
         * Add MovableObject, character to map.
         * Pay attention to the order !
         */
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0); // Gesamten Kontext zurück verschieben.

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
        if(mo.otherDirection) { // Hat unser Objekt eine andere Richtung? Wenn ja, dann folgt:
            this.ctx.save();    // Aktuellen Status von unserem Kontext speichern
            this.ctx.translate(mo.width, 0); // Drehen das um an der y-Achse
            this.ctx.scale(-1, 1); // Spiegeln alles 
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); // Dann fügen wir das gespielte Bild ein.

        // Alles wieder rückgängig machen, damit die nächsten Bilder nicht mehr gespiegelt sind.
        if (mo.otherDirection) { // Wenn wir unseren Kontext verändert haben, dann:
            mo.x = mo.x * -1;
            this.ctx.restore(); // Alle Änderungen rückgängig machen.
        }
    }

}