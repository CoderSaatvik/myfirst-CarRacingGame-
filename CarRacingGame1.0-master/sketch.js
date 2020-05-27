var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var track, ground ,car1image,car2image,car3image,car4image;
var form, player, game;
var car1,car2,car3,car4,cars;
function preload(){
track =loadImage("track.jpg")
car1image =loadImage("car1.png")
car2image =loadImage("car2.png")
car3image =loadImage("car3.png")
car4image =loadImage("car4.png")
ground = loadImage("ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  
  }
 if(gameState===2){
  //clear() 
  game.end()
 }
}

