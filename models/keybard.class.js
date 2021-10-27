class Keyboard {
    LEFT;
    RIGHT;
    UP;
    DOWN;
    SPACE;
    D;

    constructor() {
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