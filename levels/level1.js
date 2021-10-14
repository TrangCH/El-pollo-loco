const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        // -1.
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719), // constructor(imagePath, x, y)
        // 1.
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0), // constructor(imagePath, x, y)

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719), // constructor(imagePath, x, y)

        // 2
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2), // constructor(imagePath, x, y)

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3), // constructor(imagePath, x, y)
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3) // constructor(imagePath, x, y)
    ],

    [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),

        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins()
    ],

    [
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),

        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles()
    ],
    


);