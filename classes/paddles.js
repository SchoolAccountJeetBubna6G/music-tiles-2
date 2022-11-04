class Paddle {
    constructor () {
        let randomPositions = [50, 150, 250, 350]
        this.x = randomPositions[Math.floor(Math.random() * randomPositions.length)];   
        //this.x = 50;
        this.y = -50;
        this.width = 90;
        this.height = 150;
    }

    display() {
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }
}