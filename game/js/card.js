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
