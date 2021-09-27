class Character extends MovableObject {

    height = 250;
    y = 185;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    
    /**
     * This function is always there. In every class. It is always called first of all.
     */
    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING); 

        this.animate();

    }

    /**
     * Switch pictures (motion)
     */
    animate() {

        setInterval(() => {
            // currentImage wird fortlaufen erhöht
            // IMAGES_WALKING.length bleibt 6 (Länge des Arrays)
            let i = this.currentImage % this.IMAGES_WALKING.length; // Modulo Restklassen let i = 0 & 6
            // i = 0, 1, 2,  3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, ...
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path]; // setze das Bild in unserem cache // Wir wollen auf einen Eintrag aus unserem Array zugreifen. Keine Funktion.
            this.currentImage++;            
        }, 100);

    }


    /**
     * To jump
     */
    jump() {

    }


}