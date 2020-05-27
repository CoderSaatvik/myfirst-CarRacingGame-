class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    car1.addImage("car1",car1image)
    car2.addImage("car2",car2image)
    car3.addImage("car3",car3image)
    car4.addImage("car4",car4image)
    cars=[car1,car2,car3,car4]


  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
     background (ground)
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index = 0;
       var x =175;
       var y ;

      for(var plr in allPlayers){
      index =index+1;
      x =x+200;
      y =displayHeight-allPlayers[plr].distance;
      cars[index-1].x=x;
      cars[index-1].y=y
      fill("yellow")
      text(allPlayers[plr].name,x-40,y+70) 
      if(index===player.index){
      //  cars[index-1].shapeColor="red"
      fill("green")
      ellipse(x,y,60,60)

      camera.position.x =displayWidth/2
       camera.position.y= cars[index-1].y;
      }  
       
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3790){
      player.rank+=1;
      gameState=2;
      
     textSize(30)
     text("Game Over",displayWidth/2,3790)
     Player.updateCarsAtEnd(player.rank)
    }
    drawSprites();
  }
  end(){
    console.log("game ended")
   // game.update(2)
  console.log(player.rank)  
   
    
  }
}
