class B extends DrawableObject {

    IMAGES = [
        './img/10.Keys/B.png', // 0
    ];

    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 680;
        this.y = 460;
        this.width = 20;
        this.height = 20;
    }
    
}