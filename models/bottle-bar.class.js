class Bottlebar extends DrawableObject {



    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png', // 0
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png' // 5
    ];

    percentage = 0; // Standardmäßig 100%



    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 400;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(0);
    }

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
        if (this.percentage >= 9) {
            return 5;
        } else if (this.percentage >= 7) {
            return 4;
        } else if (this.percentage >= 5) {
            return 3;
        } else if (this.percentage >= 3) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
