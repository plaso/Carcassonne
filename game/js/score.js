function Score() {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.turnPlayerOne = false;
}

Score.prototype.addPlayerOneScore = function() {
  this.playerOneScore++;

  $(".player-1 .player-score").text(this.playerOneScore);
};

Score.prototype.addPlayerTwoScore = function() {
  this.playerTwoScore++;

  $(".player-2 .player-score").text(this.playerTwoScore);
};

Score.prototype.changeTurn = function() {
  if (this.turnPlayerOne) {
    this.turnPlayerOne = false;
    $(".player-2").addClass("active");
    $(".player-1").removeClass("active");
  } else {
    this.turnPlayerOne = true;
    $(".player-1").addClass("active");
    $(".player-2").removeClass("active");
  }
};

Score.prototype.scoreAcordingToTurn = function() {
  if (this.turnPlayerOne) {
    this.addPlayerOneScore();
  } else {
    this.addPlayerTwoScore();
  }
};

Score.prototype.finishGame = function() {
  if ($("#deck").children().length === 0) {
    if (playerOneScore > playerTwoScore) {
      console.log("Player 1 wins");
    } else if (playerOneScore < playerTwoScore) {
      console.log("Player 2 wins");
    } else {
      console.log("It's a tie");
    }
  }
};
