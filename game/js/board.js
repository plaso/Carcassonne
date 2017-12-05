function Board() {
  this.cellsArray = [];
  this.cellsColumns = 30;
  this.cellsRows = 30;
}

Board.prototype.createCells = function() {

  for (var i = 0; i < this.cellsRows; i++) {
    $("#board").append("<div class='row-card" + (i + 1) + " row-card'></div>");

    for (var j = 0; j < this.cellsColumns; j++) {
      $(".row-card" + (i + 1) + "").append("<div id=" + (i + 1) + "-" + (j + 1) + " class='card-cell'></div>");
    }
  }
};

Board.prototype.initialCell = function() {
  $(".row-card:nth-child(15) .card-cell:nth-child(15)").addClass("initial droppable");
};

Board.prototype.validationCard = function() {
  var that = this;

  $('.rotate-btn').click(function() {
    var angle = ($(this).prev().data('angle') + 90) || 90;
    that.rotateCardData($(this).prev());
    $(this).prev().css({'transform': 'rotate(' + angle + 'deg)'});
    $(this).prev().data('angle', angle);
  });
  $('.accept-btn').click(function() {
    var incorrectPositions = that.checkPosition($(this));
    if (incorrectPositions === 0) {
      that.createDroppables();
      $('.context-btn').remove();
    } else {
      $(this).siblings(".card").detach().appendTo($("#deck"));
      $('.context-btn').remove();
    }
    console.log(incorrectPositions);
    incorrectPositions = 0;
  });
};

Board.prototype.checkPosition = function(button) {
  var focusCard = button.siblings(".card");
  var arrayIdParent =  button.parent().get(0).id.split("-");
  var rowPosition = arrayIdParent[0];
  var columnPosition = arrayIdParent[1];

  var topElement = $("#" + (rowPosition - 1) + "-" + columnPosition);
  var rightElement = $("#" + rowPosition + "-" + (columnPosition + 1));
  var bottomElement = $("#" + (rowPosition + 1) + "-" + columnPosition);
  var leftElement = $("#" + rowPosition + "-" + (columnPosition - 1));

  var topElementData = topElement.children(".card").attr("data-bottom");
  var rightElementData = rightElement.children(".card").attr("data-left");
  var bottomElementData = bottomElement.children(".card").attr("data-top");
  var leftElementData = leftElement.children(".card").attr("data-right");

  var cardDataTop = focusCard.attr("data-top");
  var cardDataRight = focusCard.attr("data-right");
  var cardDataBottom = focusCard.attr("data-bottom");
  var cardDataLeft = focusCard.attr("data-left");

  var incorrectPositions = 0;

  if (topElement.children().length != 0) {
    if (cardDataTop != topElementData) {
      incorrectPositions++;
    }
  }
  if (rightElement.children().length != 0) {
    if (cardDataRight != rightElementData) {
      incorrectPositions++;
    }
  }
  if (bottomElement.children().length != 0) {
    if (cardDataBottom != bottomElementData) {
      incorrectPositions++;
    }
  }
  if (leftElement.children().length != 0) {
    if (cardDataLeft != leftElementData) {
      incorrectPositions++;
    }
  }

  return incorrectPositions;
};

Board.prototype.rotateCardData = function(card) {

  var actualTop = card.attr("data-top");
  var actualRight = card.attr("data-right");
  var actualBottom = card.attr("data-bottom");
  var actualLeft = card.attr("data-left");

  card.attr("data-top", actualLeft);
  card.attr("data-right", actualTop);
  card.attr("data-bottom", actualRight);
  card.attr("data-left", actualBottom);
};

Board.prototype.validatePosition = function(card) {
  if ($(card).attr("data-left") != $(card).prev().attr("data-right")) {
    alert("different");
  }
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
