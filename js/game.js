let world;


/**
 * This method accesses our canvas and binds to a variable.
 */
function init() {
    // Sobald das Spiel startet, ziehen wir den div´s die Klasse d-none zurück und zeigen sie somit.
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('playAgain').classList.remove('d-none');

    level1 = getLevel1(); // Wir weisen die Funktion getLevel1() der Variable level1 zu.
    world = new World(); // Wir erstellen eine neue Welt.
}

