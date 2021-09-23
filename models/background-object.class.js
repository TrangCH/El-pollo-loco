class BackgroundObject extends MovableObject {

    width = 720;
    height = 400;

    /**
     * LoadImage at position (x, y)
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // 480 - 400(Höhe des Bildes)
       


    }


}