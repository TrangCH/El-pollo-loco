class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 300;

    /**
       * This function is always there. In every class. It is always called first of all.
       */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 0 + Math.random() * 500; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
        
    
    }


}