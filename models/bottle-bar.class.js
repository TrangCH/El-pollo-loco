class Bottlebar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png', // 0
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png' // 5
    ];

    percentage = 0; // Standardmäßig = 0


    /**
     * 
     */
    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 400;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(0);
    }


    /**
     * 
     * @param {number} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... s
        // this.resolveImageIndex() zwischen 4 und 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]; // Dadurch wird das jeweilige img angezeigt.
    }

    /**
     * Returns the number of the picture depending on the conditions.
     */
    resolveImageIndex() {
        if (this.percentage >= 5) { //  >= 17
            return 5; // 100%
            //this.character.isColliding(bottle) = false;
        } else if (this.percentage >= 4) { // >= 13
            return 4; // 80%
        } else if (this.percentage >= 3) { // >= 9
            return 3; // 60%
        } else if (this.percentage >= 2) { // >= 5
            return 2; // 40%
        } else if (this.percentage >= 1) { // >= 1
            return 1; // 20%
        } else {
            return 0; // 0%
        }
    }
    
}
