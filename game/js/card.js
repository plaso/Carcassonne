function Card(type) {
  this.type = type;
}

Card.prototype.drag = function() {
  $(".score .card").draggable({
    snap: ".initial",
    snapMode: "inner",
    revert: "invalid",
    revertDuration: 600,
    helper: "clone",
  });
};

Card.prototype.rotate = function() {

};
