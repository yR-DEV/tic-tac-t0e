

function winnerCheck (gameArr) {
  var winArrCheck = [];

  winArrCheck.push(gameArr[0] + gameArr[1] + gameArr[2]);
  winArrCheck.push(gameArr[3] + gameArr[4] + gameArr[5]);
  winArrCheck.push(gameArr[6] + gameArr[7] + gameArr[8]);
  winArrCheck.push(gameArr[0] + gameArr[3] + gameArr[6]);
  winArrCheck.push(gameArr[1] + gameArr[4] + gameArr[7]);
  winArrCheck.push(gameArr[2] + gameArr[5] + gameArr[8]);
  winArrCheck.push(gameArr[0] + gameArr[4] + gameArr[8]);
  winArrCheck.push(gameArr[2] + gameArr[4] + gameArr[6]);



  winArrCheck.forEach(function(winSol) {
    if(winSol == 3) {
      return "X Wins";
    } else if (winSol == 0) {
      return "O Wins";
    }
  });

  gameArr.forEach(function(ticTacBox) {
    if(gameArr[i] === "") {
      return true;
    } else {
      return "DRAW BRUH";
    }
  });
};
