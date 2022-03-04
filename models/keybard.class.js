class Keyboard {
    LEFT;
    RIGHT;
    UP;
    DOWN;
    SPACE;
    D;

    leftKey = document.getElementById('leftKey');
    rightKey = document.getElementById('rightKey');

    AKey = document.getElementById('AKey');
    BKey = document.getElementById('BKey');

    constructor() {

        /**
         * Touchscreen: Touchstart
         */

        this.leftKey.addEventListener('touchstart', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.LEFT = true;
            console.log(this.LEFT);
        });

        this.rightKey.addEventListener('touchstart', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.RIGHT = true;
            console.log(this.RIGHT);
        });

        this.AKey.addEventListener('touchstart', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.SPACE = true;
            console.log(this.SPACE);
        });

        this.BKey.addEventListener('touchstart', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.D = true;
            console.log(this.D);
        });

        /**
         * Touchscreen: Touchend
         */

        this.leftKey.addEventListener('touchend', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.LEFT = false;
            console.log(this.LEFT);
        });

        this.rightKey.addEventListener('touchend', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.RIGHT = false;
            console.log(this.RIGHT);
        });

        this.AKey.addEventListener('touchend', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.SPACE = false;
            console.log(this.SPACE);
        });

        this.BKey.addEventListener('touchend', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.D = false;
            console.log(this.D);
        });

        /**
        * As soon as the button is pressed.
        */
        window.addEventListener('keydown', (e) => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            if (e.keyCode == 39) {
                this.RIGHT = true;
            }

            if (e.keyCode == 37) {
                this.LEFT = true;
            }

            if (e.keyCode == 38) {
                this.UP = true;
            }

            if (e.keyCode == 40) {
                this.DOWN = true;
            }

            if (e.keyCode == 32) {
                this.SPACE = true;
            }

            if (e.keyCode == 68) {
                this.D = true;
            }
            //let firstActionDate = new Date();
            //console.log('Aktuelle Zeit ist:', firstActionDate);
            //setTimeout(() => {
            //    if (e.keyCode == 68) {
            //        let secondActionDate = new Date();
            //        let temporalDistance = secondActionDate.getTime() - firstActionDate.getTime();
            //        if (temporalDistance < 1000) {
            //            this.D = false;
            //            // Taste D ausgeschaltet und erst nach einer Sekunde wieder funktionsfähig.
            //            console.log('Der zeitliche Abstand zwischen zwei Klicks ist kleiner als 1000 und beträgt', temporalDistance);
            //        }
            //    }
            //}, 500);

        });

        /**
         * As soon as the button is released.
         */
        window.addEventListener('keyup', (e) => { // Gilt für alle Tasten.
            if (e.keyCode == 39) {
                this.RIGHT = false;
            }

            if (e.keyCode == 37) {
                this.LEFT = false;
            }

            if (e.keyCode == 38) {
                this.UP = false;
            }

            if (e.keyCode == 40) {
                this.DOWN = false;
            }

            if (e.keyCode == 32) {
                this.SPACE = false;
            }

            if (e.keyCode == 68) {
                this.D = false;
            }
        });
    }

}