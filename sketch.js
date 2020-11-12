var thunderBolt1Img,thunderBolt2Img;
var thunderBolt3Img,thunderBolt4Img;
var maxDrops = 100;
var umbrealla;

function preload(){
   thunderBolt1Img = loadImage("1.png");
   thunderBolt2Img = loadImage("2.png");
   thunderBolt3Img = loadImage("3.png");
   thunderBolt4Img = loadImage("4.png");
}

function setup(){
   createCanvas(400,1200);
   
    umbrealla = new Umbrealla(500,400,50,20);
}

function draw(){
     background(9,10,12)

    for(var i=0; i<maxDrops; i++){
       drops.push(new createDrops(random(0,400), random(0,400)));

    }

    
}  

function spawnThunder(){
   if(frameCount%12===0){
       var thunder = createSprite(1200,100,20,20);
       var rand = Math.round(random(1,4));
       switch(rand){
           case 1: thunder.addImage(thunderBolt1Img);
                   break;
           case 2: thunder.addImage(thunderBolt2Img);
                   break;
           case 3: thunder.addImage(thunderBolt3Img);
                   break;
           case 4: thunder.addImage(thunderBolt4Img);
                   break;
           default: break;
       }
       thunder.y = Math.round(random(100,140));
       thunder.lifetime = 100;
       
   }
}

