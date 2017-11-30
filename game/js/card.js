function Card(type) {
  this.type = type;
}

Card.prototype.drag = function() {
  $(".card").draggable();
};

Card.prototype.rotate = function() {

};
