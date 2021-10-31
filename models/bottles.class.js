class Bottles extends MovableObject {

    y = 370;
    width = 55;
    height = 70;
    x = 100;
    //static lastBottlesXPos = -1800; // Statische Variable standardmäßig am Anfang = -1500;

    /**
      * This function is always there. In every class. It is always called first of all.
      */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');
        
        //this.x = Bottles.lastBottlesXPos + Math.random() * 50 + Math.random() * 200; // 200  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
        // Bottles.lastBottlesXPos = this.x;
        this.x = this.x + Math.random() * 2000;
    }
    
}