//Car positioning variables
let carsX = [600, 600, 600, 600, 600, 600];
let carsY = [40, 96, 150, 210, 270, 318];
let carsSpeed = [3, 7, 5, 6, 4, 2.5];
let carW = 50;
let carH = 40;

//Enemies functiopns
function showEnemies() {
  for (i=0 ; i < carsX.length; i++) {
    image(imgCars[i], carsX[i], carsY[i], carW, carH);
    }
  }
  
  function moveEnemies() {
    for (i=0; i < imgCars.length; i++) {
    carsX[i] -= carsSpeed[i];
  } 
}