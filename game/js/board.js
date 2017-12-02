function Board() {
  this.cellsArray = [];
  this.cellsColumns = 30;
  this.cellsRows = 30;
}

Board.prototype.createCells = function() {

  for (var i = 0; i < this.cellsRows; i++) {
    $("#board").append("<div class='row-card'></div>");
  }

  for (var j = 0; j < this.cellsColumns; j++) {
    $(".row-card").append("<div class='card-cell'></div>");
  }
};

Board.prototype.initialCell = function() {
  $(".row-card:nth-child(6) .card-cell:nth-child(6)").addClass("initial droppable");
};

Board.prototype.acceptCard = function() {
  $( ".droppable" ).droppable({
  accept: ".card",
  activeClass: "cell-highlighted",
  drop: function( event, ui) {
    alert("dropped");
    $(ui.draggable).addClass("blocked");
    $(ui.draggable).detach().appendTo($(this));
  }
  });
};

Board.prototype.createDroppables = function() {
  var parentOfCell = $(".ui-droppable").parent();
  var indexPrincipalCell = $(".ui-droppable").index();

  var previousParent = $(".ui-droppable").parent().prev();
  var nextParent = $(".ui-droppable").parent().next();

  var cellSelector = ".card-cell:nth-child(" + (indexPrincipalCell + 1) + ")";

  previousParent.children( cellSelector ).addClass("initial");
  nextParent.children( cellSelector ).addClass("initial");

  $( ".ui-droppable" ).prev().addClass("initial");
  $( ".ui-droppable" ).next().addClass("initial");
};
