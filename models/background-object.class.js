class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    /**
     * LoadImage at position (x, y)
     */
    constructor(imagePath, x) { // weg: numerOfRepetition
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // 480 - 400(Höhe des Bildes)
       

    }

  

    

}