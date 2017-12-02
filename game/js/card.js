function Card() {
  this.deck = [
    { name: "opposite-castles",     img: "castle-green-castle-green.svg" },
    { name: "opposite-castles",     img: "castle-green-castle-green.svg" },
    { name: "opposite-castles",     img: "castle-green-castle-green.svg" },
    { name: "castle",               img: "castle-green-green-green.svg" },
    { name: "castle",               img: "castle-green-green-green.svg" },
    { name: "castle",               img: "castle-green-green-green.svg" },
    { name: "castle",               img: "castle-green-green-green.svg" },
    { name: "castle",               img: "castle-green-green-green.svg" },
    { name: "cross",                img: "green-road-road-road-cross.svg" },
    { name: "cross",                img: "green-road-road-road-cross.svg" },
    { name: "cross",                img: "green-road-road-road-cross.svg" },
    { name: "cross",                img: "green-road-road-road-cross.svg" },
    { name: "cross",                img: "green-road-road-road-cross.svg" },
    { name: "double-castle",        img: "castle-castle-green-green.svg" },
    { name: "double-castle",        img: "castle-castle-green-green.svg" },
    { name: "double-castle",        img: "castle-castle-green-green.svg" },
    { name: "castle-road",          img: "castle-road-green-road.svg" },
    { name: "castle-road",          img: "castle-road-green-road.svg" },
    { name: "castle-road",          img: "castle-road-green-road.svg" },
    { name: "castle-road",          img: "castle-road-green-road.svg" },
    { name: "curve",                img: "green-green-road-road.svg" },
    { name: "curve",                img: "green-green-road-road.svg" },
    { name: "curve",                img: "green-green-road-road.svg" },
    { name: "curve",                img: "green-green-road-road.svg" },
    { name: "curve",                img: "green-green-road-road.svg" },
    { name: "road",                 img: "green-road-green-road.svg" },
    { name: "road",                 img: "green-road-green-road.svg" },
    { name: "road",                 img: "green-road-green-road.svg" },
    { name: "road",                 img: "green-road-green-road.svg" },
    { name: "road",                 img: "green-road-green-road.svg" },
  ];
}

Card.prototype.shuffle = function() {
  var array = this.deck;
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  this.deck = array;

  return this.deck;
};

Card.prototype.createDeck = function() {
  this.shuffle();
  var html = '';

  this.deck.forEach(function(pic, index) {

    html += '<div class= "card" name="card_' + pic.name + '">';
      html += '<div class="back"';
      html += '    name="' + pic.name + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(img/pieces/' + pic.img + '") no-repeat"';
      html += '    name="'       + pic.name +  '">';
      html += '</div>';
    html += '</div>';
  });

  document.getElementById('deck').innerHTML = html;
};

Card.prototype.selectCard = function() {
  $('.card .back').mousedown(function() {
    $(this).addClass('front').removeClass('back');
    $(this).siblings().addClass('back').removeClass('front');
  });
};

Card.prototype.drag = function() {
  $(".score .card").draggable({
    snap: ".initial",
    snapMode: "inner",
    revert: "invalid",
    revertDuration: 600,
    helper: "clone",
  });
};
