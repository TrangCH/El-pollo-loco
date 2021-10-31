class World {

    // You no longer need a let within a class, a const or a var.
    character = new Character();
    level = getLevel1();
    ctx;
    keyboard = new Keyboard();
    camera_x = 0; // Wir wollen es nach rechts verschieben.
    statusbar = new Statusbar();
    coinbar = new Coinbar();
    bottlebar = new Bottlebar();
    endbossbar = new Endbossbar();
    throwableObjects = [];

    loose = false;
    win = false;
    youlost = new YouLost();
    youwin = new GameOver();


    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor() {
        this.ctx = canvas.getContext('2d');
        this.canvas = document.getElementById('canvas');     // Greifen auf globale Variable zu. Das rechte canvas wird in das linke reingeschrieben.
        this.setWorld();
        this.run();
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
        // Festgelegte Methoden
        this.character.animate();
        this.cloudsAnimate();
        this.enemiesAnimate();
        //this.level.enemies[this.level.enemies.length].animate();
        this.checkWorldInterval = setInterval(this.checkWorld.bind(this), 200); // Wir müssen es in eine Variable speichern.
        this.requestDraw = requestAnimationFrame(this.draw.bind(this));
    }

    cloudsAnimate() {
        this.level.clouds.forEach((cloud) => {
            cloud.animate();
        });
    }

    enemiesAnimate() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chicken) {
                enemy.animate();
            }
        });
    }

    /**
     * Stop intervals and animation frames
     */
    stop() {
        this.character.stopAnimate();
        this.cloudsStopAnimate();
        this.enemiesStopAnimate();
        // Festgelegte Methoden. Es wird nicht mehr gemalt. Das letzte Bild bleibt.
        clearInterval(this.checkWorldInterval);
        cancelAnimationFrame(this.requestDraw);
    }

    cloudsStopAnimate() {
        this.level.clouds.forEach((cloud) => {
            cloud.stopAnimate();
        });
    }

    enemiesStopAnimate() {
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Chicken) {
                enemy.stopAnimate();
            }
        });
    }

    /**
     * Checks in the world
     * wird immer wieder ausgeführt (siehe run() ), alle 200 Millisekunden
     */
    checkWorld() {
        this.checkGameOver();
        this.checkCollisions();
        this.checkThrowObjects();
    }

    /**
     * Check collisions 
     */
    checkCollisions() {
        this.checkCollisionsEnemies();
        this.checkCollisionsCoins();
        this.checkCollisionsBottles();
        this.checkCollisionThrowableObjectsWithEndboss();
        this.checkCollisionThrowableObjectsWithChickens();
    }


    /**
     * This function tests whether button D is pressed and, if necessary, indicates that a bottle has been thrown.
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.character.collectionBottles >= 1) {
            this.character.collectionBottles -= 1; // löschen
            let bottle = new ThrowableObject(this.character.x + 25, this.character.y + 100, this.character.otherDirection); // Von Koordinate (x, y) character
            this.throwableObjects.push(bottle); // Füge neuen bottle hinzu
            this.bottlebar.setPercentage(this.character.collectionBottles); // bottlebar aktualisieren
        }
        // else if (this.keyboard.D && this.character.collectionBottles >= 1 && this.character.otherDirection == true) {
        //     this.character.collectionBottles -= 1; // löschen
        //     let bottle = new ThrowableObject(this.character.x - 30, this.character.y + 70); // Von Koordinate (x, y) character
        //     this.throwableObjects.push(bottle); // Füge neuen bottle hinzu
        //     this.bottlebar.setPercentage(this.character.collectionBottles); // bottlebar aktualisieren
        // }
    }

    /**
     * This function checks whether a bottle collides with the final boss.
     */
    checkCollisionThrowableObjectsWithEndboss() {
        this.throwableObjects.forEach((throwableObject) => {
            let endboss = this.level.enemies[this.level.enemies.length - 1];
            if (!endboss.isDead()) { // Wenn Endboss nicht Tod ist, dann soll Folgendes passieren:
                // Wenn throwableObject mit dem Endboss kollidiert:
                if (throwableObject.isColliding(endboss)) {
                    endboss.hitEndboss(); // Der Endboss bekommt Verletzungen.
                    // Energieleiste vom Endboss soll aktualisiert werden.
                    this.endbossbar.setPercentage(endboss.energy);
                }
            }
        })
    }

    /**
     * This function checks whether a bottle collides with the chickens.
     */
    checkCollisionThrowableObjectsWithChickens() {
        this.throwableObjects.forEach((throwableObject) => {
            // if (enemy instanceof Chicken) {
            this.level.enemies.forEach((enemy) => {
                if (throwableObject.isColliding(enemy)) {
                    if (enemy instanceof Chicken) {
                        //this.hitChicken();
                        // let positionChicken = this.level.enemies.indexOf(enemy);
                        // positionChicken.isDead();
                        let position = this.level.enemies.indexOf(enemy);
                        enemy.energy = 0;
                        setTimeout(() => {
                            this.level.enemies.splice(position, 1)
                        }, 1000);
                        //this.level.enemies[position].playDead();
                        //let position = this.level.bottles.indexOf(bottle);
                        //this.level.bottles.splice(position, 1);
                    }
                }
            });
        });
    }


    /**
     * This function tests whether a collision with another object is taking place or not.
     */
    checkCollisionsEnemies() {
        // Um alle meine Gegner zu kriegen.
        // forEach: kontrolliere für jeden einzelnen Gegner, ob meine Gegner mit meinem character kollidieren.
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
                if (enemy instanceof Endboss) {
                    enemy.attack = true;
                }
            } else {
                if (enemy instanceof Endboss) {
                    enemy.attack = false;
                }
            }
        });
    }

    /**
     * Checks when the game is over.
     */
    checkGameOver() {
        if (this.character.isDead() || this.level.enemies[this.level.enemies.length - 1].isDead()) { // || this... = Endboss
            //this.character.stopAnimate();
            //this.level.enemies[this.level.enemies.length - 1].stopAnimate(); // = Endboss.stopAnimate()
            this.stop();
            setTimeout(() => {
                this.showGameOverScreen();
            }, 1000);
        };
    }

    /**
    * Won or lost, add "Game over" screen oder "You lost" screen
    */
    showGameOverScreen() {
        if (this.loose) {
            //document.getElementById('canvas').innerHTML = '';
            //document.getElementById('innerCanvas').src = './img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png';
            this.addToMap(this.youlost);
        } else if (this.win) {
            this.addToMap(this.youwin);
        }
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

        // This function will only be carried out when all functions above have been carried out.
        this.requestDraw = requestAnimationFrame(this.draw.bind(this));
    }

    /**
      * To add multiple objects
      * @param {string} objects 
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