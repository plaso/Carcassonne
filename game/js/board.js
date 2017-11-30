cards = [];

function Board() {

}

Board.prototype.createCells = function() {

  for (var i = 0; i < 60; i++) {
    $("#board").append("<div class='row-card'></div>");
  }

  for (var j = 0; j < 60; j++) {
    $(".row-card").append("<div class='card card-board'></div>");
  }
};
