class MovableObject { // template
    x = 120;
    y = 280;
    img;
    width = 100;
    height = 150;
    imageCache = {}; // Bilderspeicher JSON
    currentImage = 0;
    speed = 0.1;
    otherDirection = false; // false, weil standardmäßig sollte kein Bild gespiegelt sein
    speedY = 0; // speed in y-Richtung
    acceleration = 2.5; // Beschleunigung (vereinfachte Gravitationskraft)

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


    isAboveGround() {
        return this.y < 180;
    }

    /**
     * This function loads the image.
     * @param {string} path source
     */
    // loadImage('img/teyt.png');
    loadImage(path) {          // Image already exists. Image only in javascript.
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }


    /**
     * This function loads the images.
     * @param {array} arr  = ['img/image1.png, 'img/image2.png', ...]
     */
    loadImages(arr) { // array
        arr.forEach(path => {
            let img = new Image();
            img.src = path; // Laden wir das Bild in dieses Image-Objekt hinein.
            this.imageCache[path] = img; // siehe imageCache oben // update imageCache // img muss reingeladen werden
        });

    }

    playAnimation(images) {
        // currentImage wird fortlaufen erhöht
        // IMAGES_WALKING.length bleibt 6 (Länge des Arrays)
        let i = this.currentImage % this.IMAGES_WALKING.length; // Modulo Restklassen let i = 0 & 6
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
        this.otherDirection = false;
    }

    /**
    * Move to the left
    */
    moveLeft() {
        this.x -= this.speed; // Um x Pixel pro Sekunde nach rechts.
        this.otherDirection = true;
    }

   
}