class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2700; // 2200
    coins;
    bottles;
    //youlost;
    //gameover;
    
    constructor(enemies, clouds, backgroundObjects, coins, bottles){ //, youlost, gameover){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}