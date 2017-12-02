var card = new Card();
var board = new Board();

$( document ).ready(function() {
  board.createCells();
  board.initialCell();
  card.createDeck();
  card.selectCard();
  board.acceptCard();
  card.drag();
});
