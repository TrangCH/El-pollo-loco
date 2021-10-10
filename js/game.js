let canvas;
let world;
let keyboard = new Keyboard();

/**
 * This method accesses our canvas and binds to a variable.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); // Übergeben eine Variable canvas und keyboard an unsere Welt


    console.log('My character is', world.character); // or world['character'];

}

/**
 * As soon as the button is pressed.
 */
window.addEventListener('keydown', (e) => { // Gilt für alle Tasten.
    // console.log(e.keyCode); // TastenCode
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    
});

/**
 * As soon as the button is released.
 */
window.addEventListener('keyup', (e) => { // Gilt für alle Tasten.
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});