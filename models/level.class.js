class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200; // 2200
    coins;
    bottles;
    youlost;
    gameover;

    constructor(enemies, clouds, backgroundObjects, coins, bottles, youlost, gameover){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.youlost = youlost;
        this.gameover = gameover;

        //this.animateAll();
    }

    //animateAll() {
    //    this.animateCollection(this.enemies);
    //    this.animateCollection(this.clouds);
    //    this.animateCollection(this.coins);
    //    this.animateCollection(this.bottles);
    //}

    //animateCollection(array) {
    //    // element = this.enemies, this.clouds, this.coins, this.bottles
    //    array.forEach(element => {
    //        element.animate();
    //    });
    //}

    //stopAnimateAll() {
    //    this.stopAnimateCollection(this.enemies);
    //    this.stopAnimateCollection(this.clouds);
    //    this.stopAnimateCollection(this.coins);
    //    this.stopAnimateCollection(this.bottles);
   // //}

    //stopAnimateCollection() {
    //    // element = this.enemies, this.clouds, this.coins, this.bottles
    //    array.forEach(element => {
    //        element.stopAnimate();
    //    });
    //}

    



}