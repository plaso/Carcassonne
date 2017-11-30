function Board() {
  this.cellsArray = [];
  this.cellsColumns = 60;
  this.cellsRows = 60;
}

Board.prototype.createCells = function() {

  for (var i = 0; i < this.cellsRows; i++) {
    $("#board").append("<div class='row-card'></div>");
    this.cellsArray.push([]);
  }

  for (var j = 0; j < this.cellsColumns; j++) {
    $(".row-card").append("<div class='card-cell'></div>");
  }
  for (var k = 0; k < this.cellsRows; k++) {
    for (var l = 0; l < this.cellsColumns; l++) {
      this.cellsArray[k].push(l);
    }
  }
};

Board.prototype.initialCell = function() {
  $(".row-card:nth-child(6) .card-cell:nth-child(6)").addClass("initial");
};

Board.prototype.acceptCard = function() {
  $( ".initial" ).droppable({
  accept: ".card",
  activeClass: "cell-highlighted",
  drop: function( event, ui) {
    alert("dropped");
  }
  });
};
