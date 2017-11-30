function Card(type) {
  this.type = type;
}

Card.prototype.drag = function() {
  $(".score .card").draggable({
    snap: true,
    snapMode: "inner",
  });
};

Card.prototype.rotate = function() {

};
