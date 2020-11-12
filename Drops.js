class Drops {
    constructor(x,y) {
        var options = {
         friction: 0.1
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.rain = this.Drops;
        World.add(world,this.body);
    }

    display(){
       
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain ,{x:RandomSource(0,400), y:RandomSource(0,400)})
        }
    }
    
}