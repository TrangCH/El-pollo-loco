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
        this.bindTouchscreen();
        this.bindKeyboard();
    }

    bindTouchscreen() {
        this.touchStart();
        this.touchEnd();
    }

    bindKeyboard() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handelKeyUp.bind(this));
    }

    touchStart() {

         this.leftKey.addEventListener('touchstart', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.LEFT = true;
            console.log(this.LEFT);
        });

        this.rightKey.addEventListener('touchstart', () => { 
            this.RIGHT = true;
            console.log(this.RIGHT);
        });

        this.AKey.addEventListener('touchstart', () => { 
            this.SPACE = true;
            console.log(this.SPACE);
        });

        this.BKey.addEventListener('touchstart', () => { 
            this.D = true;
            console.log(this.D);
        });
    }

    touchEnd() {

         this.leftKey.addEventListener('touchend', () => { // Gilt für alle Tasten.
            // console.log(e.keyCode); // TastenCode
            this.LEFT = false;
            console.log(this.LEFT);
        });

        this.rightKey.addEventListener('touchend', () => { 
            this.RIGHT = false;
            console.log(this.RIGHT);
        });

        this.AKey.addEventListener('touchend', () => { 
            this.SPACE = false;
            console.log(this.SPACE);
        });

        this.BKey.addEventListener('touchend', () => { 
            this.D = false;
            console.log(this.D);
        });
    }

    handleKeyDown(e) {
        // Gilt für alle Tasten.
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
            setTimeout(() => {
                this.D = false;
            }, 200);
        }

    }

    handelKeyUp(e) {
        // Gilt für alle Tasten.
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

    }
}