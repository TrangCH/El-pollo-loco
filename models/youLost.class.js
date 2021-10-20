class YouLost extends MovableObject {

    width = 720;
    height = 480;

    /**
     * LoadImage at position (x, y)
     */
     constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png');
        this.x = 0;
        this.y = 0;
       
    }

}