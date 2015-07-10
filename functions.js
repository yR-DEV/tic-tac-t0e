

function winnerCheck (gameArr) {
  var winArrCheck = [];

  winArrCheck.push(Number(gameArr[0]) + Number(gameArr[1]) + Number(gameArr[2]));
  winArrCheck.push(Number(gameArr[3]) + Number(gameArr[4]) + Number(gameArr[5]));
  winArrCheck.push(Number(gameArr[6]) + Number(gameArr[7]) + Number(gameArr[8]));
  winArrCheck.push(Number(gameArr[0]) + Number(gameArr[3]) + Number(gameArr[6]));
  winArrCheck.push(Number(gameArr[1]) + Number(gameArr[4]) + Number(gameArr[7]));
  winArrCheck.push(Number(gameArr[2]) + Number(gameArr[5]) + Number(gameArr[8]));
  winArrCheck.push(Number(gameArr[0]) + Number(gameArr[4]) + Number(gameArr[8]));
  winArrCheck.push(Number(gameArr[2]) + Number(gameArr[4]) + Number(gameArr[6]));

  for (var i = 0; i < winArrCheck.length; i ++){
    if(winArrCheck[i] === 3) {
      return "X Wins";
    } else if (winArrCheck[i] === 0) {
      return "O Wins";
    }
  };


  var drawCheck= true;

  for( i = 0; i < gameArr.length; i++){
    console.log(gameArr);
    if(gameArr[i] === 'e') {
      drawCheck = false;
    }
  };

  if(drawCheck) {
    return "Draw Bruh!"
  };

};
