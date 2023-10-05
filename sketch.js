//Canva
function setup() {
  createCanvas(500, 400);
  bgm.loop();
}

//Main
function draw() {
  //Defining the scenario
  background(streetBg);
  
  //Calling player functions
  showPlayer();
  movePlayer();
  resetCarPos();
  verifyCollision();
  showScore();
  scorePoint();

  //Calling enemy functions
  showEnemies();
  moveEnemies();
}