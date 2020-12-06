var database;
var backgroundImg;
var gameState=0;
var playerCount;
var form;
var player, game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(800,800);

  game=new Game();
game.getState();
game.start();

  
}

function draw(){
  background("white");
  
  
}
