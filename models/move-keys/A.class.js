class A extends DrawableObject {

    IMAGES = [
        './img/10.Keys/A.png' // 0
    ];

    constructor() {
        super(); // Aufrufen, damit wir die Methoden von dem übergeordneten Objekt initialisieren.
        this.loadImages(this.IMAGES);
        this.x = 650;
        this.y = 430;
        this.width = 20;
        this.height = 20;
    }
    
}