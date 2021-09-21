class World {

    // You no longer need a let within a class, a const or a var.
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;     // Greifen auf globale Variable zu. Das rechte canvas wird in das linke reingeschrieben.
        this.draw();

    }



    /**
     * To draw a picture
     */
    draw() {
        /**
         * How to clear canvas for redrawing.
         */
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        /**
         * Automate for our chickens, for each item from enemies.
         */
        this.enemies.forEach(enemy => { // Don't forget this
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

         /**
         * Automate for our clouds, for each item from enemies.
         */
          this.clouds.forEach(cloud => { // Don't forget this
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });

        /**
         * The draw method is called as often as the graphics card allows.
         */
        self = this;
        // This function will only be carried out when all functions above have been carried out.
        requestAnimationFrame(function () {
            self.draw(); // asynchrone
        });

    }

}