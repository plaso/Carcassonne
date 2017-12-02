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
  var rotateBtn = '<div class="capa1 rotate-btn"><div class="capa2"><div class="capa23"><div class="capa3"><div class="capa4"><span class="text rotate">Rotate</span><div class="capa5"></div></div></div></div></div></div>';
  var acceptBtn = '<div class="capa1 accept-btn"><div class="capa2"><div class="capa23"><div class="capa3"><div class="capa4"><span class="text rotate">Accept</span><div class="capa5"></div></div></div></div></div></div>';

  $( ".droppable" ).droppable({
  accept: ".card",
  activeClass: "cell-highlighted",
  drop: function( event, ui) {
    $(ui.draggable).addClass("blocked");
    $(ui.draggable).detach().appendTo($(this));
    $(this).append(rotateBtn).append(acceptBtn);
    $('.rotate-btn').click(function() {
      var angle = ($(this).prev().data('angle') + 90) || 90;
      $(this).prev().css({'transform': 'rotate(' + angle + 'deg)'});
      $(this).prev().data('angle', angle);
    });
  }
  });
};

Board.prototype.createDroppables = function() {
  var parentOfCell = $(".ui-droppable").parent();
  var indexPrincipalCell = $(".ui-droppable").index();

  var previousParent = $(".ui-droppable").parent().prev();
  var nextParent = $(".ui-droppable").parent().next();

  var cellSelector = ".card-cell:nth-child(" + (indexPrincipalCell + 1) + ")";

  previousParent.children( cellSelector ).addClass("initial droppable");
  nextParent.children( cellSelector ).addClass("initial droppable");

  $( ".ui-droppable" ).prev().addClass("initial droppable");
  $( ".ui-droppable" ).next().addClass("initial droppable");

  this.acceptCard();
};
