function Card(type) {
  this.type = type;
}

Card.prototype.drag = function() {
  $(".score .card").draggable({
    snap: true,
    snapMode: "inner",
    revert: "invalid",
    revertDuration: 600,
  });
};

Card.prototype.rotate = function() {

};
