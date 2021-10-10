class DrawableObject {

    img;
    imageCache = {}; // Bilderspeicher JSON
    currentImage = 0;
    x = 120;
    y = 280;
    width = 100;
    height = 150;



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
    * Draw 
    */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
   * Draw frame around movableObject
   */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            // Blue rectangle
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    };

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



}