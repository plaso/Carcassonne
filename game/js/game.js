var card = new Card();
var board = new Board();

$( document ).ready(function() {
  board.createCells();
  card.drag();
});
