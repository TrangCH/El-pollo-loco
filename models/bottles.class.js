class Bottles extends MovableObject {

    y = 370;
    width = 55;
    height = 70;

    /**
      * This function is always there. In every class. It is always called first of all.
      */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');

        this.x = 300 + Math.random() * 1500; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
       

      

    }


}