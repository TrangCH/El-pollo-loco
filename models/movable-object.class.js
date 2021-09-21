class MovableObject { // template
    x = 120;
    y = 250;
    img;
    width = 100;
    height = 150;

    /**
     * This function loads the images.
     * @param {string} path source
     */
    // loadImage('img/teyt.png');
    loadImage(path) {          // Image already exists. Image only in javascript.
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
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

    }
}