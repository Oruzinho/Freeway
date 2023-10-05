// Player positioning variables 
let playerX = 100;
let playerY = 366;
let playerW = 30;
let playerH = 30;
let playerD = 15;
let collision = false;

let myScore = 0;
let enemyScore = 0;

// Player functions
function showPlayer(){
    image(player, playerX, playerY, playerW, playerH);
    }
    
    function movePlayer() {
      if (keyIsDown(87)) {
      playerY -= 3;
      }
      if (keyIsDown(83)) {
          if (itIsinsideCanva()) {
          playerY += 3;
        }
      }
}
function itIsinsideCanva() {
  if (playerY < 366) {
    return playerY < 366;
      }
    }

    function resetCarPos() {
      for (i = 0; i < carsX.length; i++) {
      if (carsX[i] < -20) {
        carsX[i] = 600;
    }
  }
}

    function resetPlayerPos() {
      playerY = 366;
    }

    function verifyCollision() {
      for (i=0; i < carsX.length; i++) {
        collision = collideRectCircle(carsX[i], carsY[i], carW, carH, playerX, playerY, playerD);
        if (collision) {
          resetPlayerPos();
          collideSFX.play();
          enemyScore++;
        }
      }
    }

    function scorePoint () {
      if (playerY < 15) {
        resetPlayerPos();
        scoreSFX.play();
        myScore++;
      }
    }

    function showScore() {
      textSize(25);
      fill(color(255, 240, 0));
      text(myScore, 100, 27);
      text(enemyScore, 400, 27);
    }