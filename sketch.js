let maxPaddles = 1;
let paddles = [], cnv;
let chaandBaaliya, despacito, kesaria, passori, raatanLambaya, SavageLove, ThereIsNothing, WhatIfITold, Attention, BlankSpace, LightSwitch, ShapeOfYou; 
let mappingValues = { "a":50,  "s":150,  "k":250,  "l":350 }
let keys = ['a','s','d','f']
let songs = [];
let gameState = 0; // 0 -> 'bout to start || 1 -> started || 2 -> ended lol

function preload() {
  // MUSIC ****************************************************************************
  chaandBaaliya = loadSound('music/01 Chaand Baaliyan.mp3');
  despacito = loadSound('music/01 Despacito - Remix.m4a');
  kesaria = loadSound('music/01 Kesariya (From _Brahmastra_).m4a');
  passori = loadSound('music/01 Pasoori.mp3');
  raatanLambaya = loadSound('music/01 Raataan Lambiyan (From _Shershaah_).mp3');
  SavageLove = loadSound('music/01 Savage Love (Laxed - Siren Beat).m4a');
  ThereIsNothing = loadSound("music/01 There's Nothing Holdin' Me Back.m4a");
  WhatIfITold = loadSound('music/01 What If (I Told You I Like You).m4a');
  Attention = loadSound('music/02 Attention.m4a');
  BlankSpace = loadSound('music/02 Blank Space.m4a');
  LightSwitch = loadSound('music/03 Light Switch.m4a');
  ShapeOfYou = loadSound('music/04 Shape of You.m4a');  
  //***********************************************************************************
}

function setup() {
  cnv = createCanvas(400, 500);
  cnv.mousePressed(startGame);
  playSongs();
  
}

function draw() { 
  background(0);
  generatePaddles();
    
}

function keyPressed() {
  deletePaddles();
}  

function startGame() {
  if(gameState == 0) {
    gameState = 1;
  }
}

function deletePaddles() {
  if(gameState == 1) {
    for(let i = 0; i < paddles.length - 1; i++) {
      // if it is in a certain range, then kill it so it is harder
      if(paddles[i].y > 300) {
        if(paddles[i].x == mappingValues.a && key==keys[0]) {
          console.log("A pad should be delted");
          paddles.splice(i, 1);
        }
        if(paddles[i].x == mappingValues.s  && key==keys[1]) {
          console.log("S pad should be delted");
          paddles.splice(i, 1);
        }
        if(paddles[i].x == mappingValues.k  && key==keys[2]) {
          console.log("K pad should be delted");
          paddles.splice(i, 1);
        }
        if(paddles[i].x == mappingValues.l  && key==keys[3]) {
          console.log("L pad should be delted");
          paddles.splice(i, 1);
        }
      }
    }
  }
}

function generatePaddles() {
  if(gameState == 1) {
    if(frameCount % 20 == 0) {
      let paddle = new Paddle();
      paddles.push(paddle);
    } 
    for(let i = 0; i < paddles.length - 1; i++) {
      rectMode(CENTER);
      fill(255, 255, 255);
      paddles[i].display();
    }
    for(let i = 0; i < paddles.length - 1; i++) {
      paddles[i].y += 10;
    }
    for(let i = 0; i < paddles.length - 1; i++) {
      if(paddles[i].y > 600) {
        paddles.splice(0);
        gameState = 2;
      }
    }
  }
}

function playSongs() {
  if(gameState == 1) {
    let songs = [chaandBaaliya, despacito, kesaria, passori, raatanLambaya, SavageLove, ThereIsNothing, WhatIfITold, Attention, BlankSpace, LightSwitch, ShapeOfYou];
    let random = Math.floor(Math.random() * songs.length - 1);
    print(random);
    console.log(songs[random]);
    songs[random].play();
    userStartAudio();
  }
}