class DrawableObject {

    img;
    imageCache = []; // Bilderspeicher JSON {}
    currentImage = 0;
    x = 120;// 120
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
        if (this instanceof Character || this instanceof Chicken || this instanceof Coins || this instanceof Bottles || this instanceof Endboss || this instanceof ThrowableObject) {
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
            //this.preloadImages(arr);
        });
    }


    /**

* Preload all images. This function should be executed before starting the game.

* imagePaths should contain all images that will be loaded: ['img/image1.png', 'img/image2.png', 'img/image3.png', ...]

*/

    preloadImages(arr) {

        for (let i = 0; i < arr.length; i++) {

            let image = new Image();

            image.src = arr[i];

            this.imageCache.push(image); // push image-path to images-array (which contains all image-paths)

            this.checkBackgroundImageCache(src_path);
        }
    }


    /**
    
       * Check if background-image is already loaded in cache; if not, create new image
    
       * @param {string} src_path - scr-path of background-image 
    
       */

    checkBackgroundImageCache(src_path) {

        // Check if image is found in images-array.

        let base_image = imageCache.find(function (img) {

            return img.src.endsWith(src_path.substring(src_path, src_path.length));

        })



        // Create new image if not found in cache

        if (!base_image) {

            base_image = new Image();

            base_image.src = src_path;

        }

        return base_image;

    }

}