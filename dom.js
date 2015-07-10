var spot0Div = document.querySelector('.spot0');
var spot1Div = document.querySelector('.spot1');
var spot2Div = document.querySelector('.spot2');
var spot3Div = document.querySelector('.spot3');
var spot4Div = document.querySelector('.spot4');
var spot5Div = document.querySelector('.spot5');
var spot6Div = document.querySelector('.spot6');
var spot7Div = document.querySelector('.spot7');
var spot8Div = document.querySelector('.spot8');
var spot = document.querySelectorAll('.spot'), i;

//game functions goes here
var game = true;
var turnCounter = 0;
var gameArr = ['', '2', '', '', '', '', '', ''];

for(var i = 0; i < spot.length; i++) {
  spot[i].addEventListener('click', function(){
    console.log(this);
    if (turnCounter % 2 === 0) {
      this.innerHTML = 'X';
      gameArr[i] = 1;
    } else {
      this.innerHTML = 'O';
      gameArr[i] = 0;
    }
    turnCounter += 1;
  })
}
