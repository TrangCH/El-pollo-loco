class Coins extends MovableObject {

    y = 350;
    width = 100;
    height = 100;
    static lastCoinsXPos = 300; // Statische Variable standardmäßig am Anfang = 300;

    /**
      * This function is always there. In every class. It is always called first of all.
      */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/8.Coin/Moneda2.png');

        this.x = Coins.lastCoinsXPos + Math.random() * 500; // 1500  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
        Coins.lastCoinsXPos = this.x;
        this.y = 360 - Math.random() * 200;

      

    }


}