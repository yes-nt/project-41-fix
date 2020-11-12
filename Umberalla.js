class Umbrealla {
    constructor(x,y) {
        var options = {
         friction: 0.1
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.Umbrealla1 = loadImage("walking_1.png");
        this.Umbrealla2 = loadImage("walking_2.png");
        this.Umbrealla3 = loadImage("walking_3.png");
        this.Umbrealla4 = loadImage("walking_4.png");
        this.Umbrealla5 = loadImage("walking_5.png");
        this.Umbrealla6 = loadImage("walking_6.png");
        this.Umbrealla7 = loadImage("walking_7.png");
        this.Umbrealla8 = loadImage("walking_8.png");

        World.add(world,this.body);
    }

    display(){

    }
}
