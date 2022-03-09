let world;


/**
 * This method accesses our canvas and binds to a variable.
 */
function init() {
    // Sobald das Spiel startet, ziehen wir den div´s die Klasse d-none zurück und zeigen sie somit.
    document.getElementById('canvas').classList.remove('d-none'); // doc.getElById(canvas)
    document.getElementById('playAgain').classList.remove('d-none');

    //Bottles.lastBottlesXPos = -1500;
    //level1 = getLevel1(Bottles.lastBottlesXPos); // Wir weisen die Funktion getLevel1() der Variable level1 zu.
    level1 = getLevel1();
    world = new World(); // Wir erstellen eine neue Welt.
}




function turnOnControlButtons() {
    document.getElementById('leftKey').classList.remove('d-none');
    document.getElementById('rightKey').classList.remove('d-none');
    document.getElementById('AKey').classList.remove('d-none');
    document.getElementById('BKey').classList.remove('d-none');
    document.getElementById('turnOnControlButtons').classList.add('d-none');
    document.getElementById('turnOffControlButtons').classList.remove('d-none');
}

function turnOffControlButtons() {
    document.getElementById('leftKey').classList.add('d-none');
    document.getElementById('rightKey').classList.add('d-none');
    document.getElementById('AKey').classList.add('d-none');
    document.getElementById('BKey').classList.add('d-none');
    document.getElementById('turnOffControlButtons').classList.add('d-none');
    document.getElementById('turnOnControlButtons').classList.remove('d-none');
}
