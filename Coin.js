class  Coin{
    constructor(x,y,width,height){
     var options = {
         isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
    }
     PLAY(){
        if(frameCount%200===0){
          coin=createSprite(700,100,20,20);
          coin.velocityX = -4;
          coin.scale=0.07;
          var rand = Math.round(random(600,100));
          coin.lifetime=100;
      
          
        }
      }
      
      
};