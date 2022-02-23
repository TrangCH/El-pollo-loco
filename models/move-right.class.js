class Moveright extends DrawableObject {

    IMAGES = [
        'img/10.Keys/right.png' // 0
    ];

    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 220;
        this.y = 460;
        this.width = 23;
        this.height = 18;
    }
    
}