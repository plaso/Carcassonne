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
  $(".row-card:nth-child(15) .card-cell:nth-child(15)").addClass("initial droppable");
};

Board.prototype.validationCard = function() {
  var Boardthis = this;

  $('.rotate-btn').click(function() {
    var angle = ($(this).prev().data('angle') + 90) || 90;
    $(this).prev().css({'transform': 'rotate(' + angle + 'deg)'});
    $(this).prev().data('angle', angle);
  });
  $('.accept-btn').click(function() {
    Boardthis.createDroppables();
    $('.context-btn').remove();
  });
};

Board.prototype.acceptCard = function() {
  var rotateBtn = '<div class="capa1 context-btn rotate-btn"><div class="capa2"><div class="capa23"><div class="capa3"><div class="capa4"><span class="text rotate">Rotate</span><div class="capa5"></div></div></div></div></div></div>';
  var acceptBtn = '<div class="capa1 context-btn accept-btn"><div class="capa2"><div class="capa23"><div class="capa3"><div class="capa4"><span class="text rotate">Accept</span><div class="capa5"></div></div></div></div></div></div>';

  var boardThis = this;

  $( ".droppable" ).droppable({
  accept: ".card",
  activeClass: "cell-highlighted",
  drop: function( event, ui) {
    $(ui.draggable).addClass("blocked");
    $(ui.draggable).detach().appendTo($(this));
    $(this).append(rotateBtn).append(acceptBtn);
    boardThis.validationCard();
  }
  });
};

Board.prototype.createDroppables = function() {
  var currentCell = $('.accept-btn').parent();

  var parentOfCell = currentCell.parent();
  var indexPrincipalCell = currentCell.index();

  var previousParent = currentCell.parent().prev();
  var nextParent = currentCell.parent().next();

  var cellSelector = ".card-cell:nth-child(" + (indexPrincipalCell + 1) + ")";

  previousParent.children( cellSelector ).addClass("initial droppable");
  nextParent.children( cellSelector ).addClass("initial droppable");

  currentCell.prev().addClass("initial droppable");
  currentCell.next().addClass("initial droppable");

  this.acceptCard();
};
