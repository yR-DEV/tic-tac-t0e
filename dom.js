var spot = document.querySelectorAll('.spot'), i;

//game functions goes here
var game = true;
var turnCounter = 0;
var gameArr = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

for(var i = 0; i < spot.length; i++) {
  spot[i].addEventListener('click', function(){
    var index = $(this).index();
    if(this.innerHTML) {
      alert("ALREADY TICKED");
    } else if (turnCounter % 2 === 0) {
      this.innerHTML = 'X';
      turnCounter += 1;
      gameArr[index] = 1;
      document.getElementsByClassName('turn')[0].innerHTML = "O's TuRn";
      if(winnerCheck(gameArr)){
        document.getElementsByClassName('turn')[0].innerHTML = winnerCheck(gameArr);
        var gameOver = alert(winnerCheck(gameArr));
          gameArr = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
          $('.game-container div').html('');
          document.getElementsByClassName('turn')[0].innerHTML = "X's TuRn";
      }
    } else {
      this.innerHTML = 'O';
      turnCounter += 1;
      gameArr[index] = 0;
      document.getElementsByClassName('turn')[0].innerHTML = "X's TuRn";
      if(winnerCheck(gameArr)){
        document.getElementsByClassName('turn')[0].innerHTML = winnerCheck(gameArr);
        var gameOver = alert(winnerCheck(gameArr));
          gameArr = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];
          $('.game-container div').html('');
          document.getElementsByClassName('turn')[0].innerHTML = "X's TuRn";
      }
    }
  });
}
