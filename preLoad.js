// Let Images 
let streetBg;
let player;
let car1;
let car2;
let car3;

//Let Sounds
let bgm;
let collideSFX;
let scoreSFX;

//Preload images
function preload() {
  streetBg = loadImage("assets/images/street.png");
  player = loadImage("assets/images/player.png");
  car1 = loadImage("assets/images/car1.png");
  car2 = loadImage("assets/images/car2.png");
  car3 = loadImage("assets/images/car3.png");
  imgCars = [car1, car2, car3, car2, car1, car3];

  bgm = loadSound("assets/sfx/bgm.mp3");
  collideSFX = loadSound("assets/sfx/collide.mp3");
  scoreSFX = loadSound("assets/sfx/score.wav");

}

