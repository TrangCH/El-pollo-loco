class Chicken extends MovableObject {

    y = 355;
    height = 75;
    width = 75;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];


    /**
    * This function is always there. In every class. It is always called first of all.
    */
    constructor() {
        // super(), nur bei Methoden in übergeordneten Klassen
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING); // Important!

        this.x = 200 + Math.random() * 500; //  Math.random() liegt zwischen 0 und 1, Zahl zwischen 200 und 700
        this.speed = 0.1 + Math.random() * 0.25;

        this.animate();

    }

    /**
    * Switch pictures (motion)
    */
    animate() {
        // 60 frames per second move to the left (chicken)
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); // 60x per second


        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);

    }


}