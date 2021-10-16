class World {

    // You no longer need a let within a class, a const or a var.
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0; // Wir wollen es nach rechts verschieben.
    statusbar = new Statusbar();
    coinbar = new Coinbar();
    bottlebar = new Bottlebar();
    endbossbar = new Endbossbar();
    throwableObjects = [];

    
    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;     // Greifen auf globale Variable zu. Das rechte canvas wird in das linke reingeschrieben.
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.collect();
    }

    setWorld() {
        this.character.world = this;
        // level.enemies[this.level.enemies.length - 1] = Endboss
        this.level.enemies[this.level.enemies.length - 1].world = this; // => this.endboss.world = this;
    }

    /**
     * It should regularly check whether two objects collide with each other or not.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }


    /**
     * This function tests whether button D is pressed and, if necessary, indicates that a bottle has been thrown.
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.character.collectionBottles > 10) { 
            this.character.collectionBottles -= 10; // löschen
            let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 70); // Von Koordinate (x, y) character
            this.throwableObjects.push(bottle); // Füge neuen bottel hinzu
            this.bottlebar.setPercentage(this.character.collectionBottles);
        }
    }

    /**
     * This function tests whether a collision with another object is taking place or not.
     */
    checkCollisions() {
        // Um alle meine Gegner zu kriegen.
        // forEach: kontrolliere für jeden einzelnen Gegner, ob meine Gegner mit meinem character kollidieren.
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    /**
    * It should regularly check whether two objects collide with each other or not.
    */
    collect() {
        setInterval(() => {
            this.checkCollisionsCoins();
            this.checkCollisionsBottles();
        }, 200);
    }

    /**
     * This function tests whether a collision with another object is taking place or not.
     */
    checkCollisionsCoins() {
        // Um alle meine Gegner zu kriegen.
        // forEach: kontrolliere für jeden einzelnen Gegner, ob meine Gegner mit meinem character kollidieren.
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.toCollectCoins(); 
                // Die indexOf() Methode gibt den Index der Zeichenkette innerhalb des aufrufenden String Objekts des ersten Vorkommnis des angegebenen Wertes beginnend bei fromIndex zurück. Gibt -1 zurück, wenn der Wert nicht gefunden wurde.
                let position = this.level.coins.indexOf(coin); 
                this.level.coins.splice(position, 1);
                //this.character.deleteCoinAfterCollision();
                this.coinbar.setPercentage(this.character.collectionCoins);
            }
        });
    }

     /**
     * This function tests whether a collision with another object is taking place or not.
     */
      checkCollisionsBottles() {
        // Um alle meine Gegner zu kriegen.
        // forEach: kontrolliere für jeden einzelnen Gegner, ob meine Gegner mit meinem character kollidieren.
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.toCollectBottles(); 
                // Die indexOf() Methode gibt den Index der Zeichenkette innerhalb des aufrufenden String Objekts des ersten Vorkommnis des angegebenen Wertes beginnend bei fromIndex zurück. Gibt -1 zurück, wenn der Wert nicht gefunden wurde.
                let position = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(position, 1);
                this.bottlebar.setPercentage(this.character.collectionBottles);
            }
        });
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
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // Gesamten Kontext zurück verschieben. Back

        // -----> Space for fixed objects <-----
        this.addToMap(this.statusbar);
        this.addToMap(this.endbossbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.ctx.translate(this.camera_x, 0); // Gesamten Kontext verschieben. Forwards


        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

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
        if (mo.otherDirection) { // Hat unser Objekt eine andere Richtung? Wenn ja, dann folgt:
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        // Alles wieder rückgängig machen, damit die nächsten Bilder nicht mehr gespiegelt sind.
        if (mo.otherDirection) { // Wenn wir unseren Kontext verändert haben, dann:
            this.flipImageBack(mo);
        }
    }

    /**
     * Bild drehen
     */
    flipImage(mo) {
        this.ctx.save();    // Aktuellen Status von unserem Kontext speichern
        this.ctx.translate(mo.width, 0); // Drehen das um an der y-Achse
        this.ctx.scale(-1, 1); // Spiegeln alles 
        mo.x = mo.x * -1;
    }

    /**
     * Bild zurück drehen
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore(); // Alle Änderungen rückgängig machen.
    }

}