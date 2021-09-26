class Chicken extends MovableObject {
 
    y = 355;
    height = 75;
    width = 75;
    

    /**
    * This function is always there. In every class. It is always called first of all.
    */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    
        this.x = 200 + Math.random() * 500; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700

    }


}