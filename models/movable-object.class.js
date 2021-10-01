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


    /**
     *  Move to the right
     */
    moveRight() { // In many modern concepts and paradigms, the word "function" is no longer needed.
        console.log('Moving right');
    }

    /**
    * Move to the left
    */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // 10x per second
    }
}