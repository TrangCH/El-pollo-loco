class Statusbar extends DrawableObject {



    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png', // 0
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png' // 5
    ];

    percentage = 100; // Standardmäßig 100%



    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 50;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(100);
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
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
    
}

