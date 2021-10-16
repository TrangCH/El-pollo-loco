class MovableObject extends DrawableObject { // template

    speed = 0.1;

    otherDirection = false; // false, weil standardmäßig sollte kein Bild gespiegelt sein
    speedY = 0; // speed in y-Richtung
    acceleration = 2.5; // Beschleunigung (vereinfachte Gravitationskraft)#
    energy = 100;
    collectionCoins = 0;
    collectionBottles = 0;

    lastCollectionCoins = 0;
    lastCollectionBottles = 0;
    lastHit = 0;

    /**
     * Apply gravity to a movable object
     */
    applyGravity() {
        setInterval(() => {
            // Wenn character über dem Boden ist oder Geschwindigkeit ist größer 0 nach oben, dann setze Gravi ein.
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY; // y-Achse - speed in y-Richtung
                this.speedY -= this.acceleration; // speed in y-Richtung - Beschleunigung
            }
        }, 1000 / 25); // 25x pro Sekunde
    }

    /**
     * Applies to all objects that are above the surface of the earth.
     */
    isAboveGround() {
        // Throwable object should always fall
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    /**
     * character.isColliding(chicken)
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width && // + mo.width
            this.y < mo.y + mo.height;
    }

    /**
     * Damage
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
    * Collection coins
    */
    toCollectCoins() {
        this.collectionCoins += 10;
        if (this.collectionCoins > 100) {
            this.collectionCoins = 100;
        } else {
            this.lastCollectionCoins = new Date().getTime();
        }
    }

    /**
    * Collection Bottles
    */
    toCollectBottles() {
        this.collectionBottles += 1;
        if (this.collectionBottles > 10) {
            this.collectionBottles = 10;
        } else {
            this.lastCollectionBottels = new Date().getTime();
        }
    }

    /**
     * Zeitpunkt speichern, wo character zuletzt verletzt worden ist.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in ms
        timepassed = timepassed / 1000; // difference in s
        return timepassed < 1; // Wenn timepassed < 1, d.h. wir wurden in den letzten 1 Sekunden getroffen.
    }

    isDead() {
        return this.energy == 0;
    }

    /**
     * This is how we change an image
     */
    playAnimation(images) {
        // currentImage wird fortlaufen erhöht
        // IMAGES_WALKING.length bleibt 6 (Länge des Arrays)
        let i = this.currentImage % images.length; // Modulo Restklassen let i = 0 & 6
        // i = 0, 1, 2,  3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, ...
        let path = images[i];
        this.img = this.imageCache[path]; // setze das Bild in unserem cache // Wir wollen auf einen Eintrag aus unserem Array zugreifen. Keine Funktion.
        this.currentImage++;
    }

    /**
     *  Move to the right
     */
    moveRight() { // In many modern concepts and paradigms, the word "function" is no longer needed.
        this.x += this.speed; // Um x Pixel pro Sekunde nach rechts.
    }

    /**
    * Move to the left
    */
    moveLeft() {
        this.x -= this.speed; // Um x Pixel pro Sekunde nach rechts.
    }


}