let canvas;
let world;

/**
 * This method accesses our canvas and binds to a variable.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);


    console.log('My character is', world.character); // or world['character'];
   
}