var assert = require("assert");

var bins = 4;

var groups = [
  [0, 22, -22, 170, -170, 180],
  [45, -140, 30, -150],
  [90, -90, 110, -70],
  [140, -45, -30, 150]
];

for (var i = 0; i < groups.length; i++) {
  groups[i].forEach(function(angle) {
    var bin = binFor(angle, bins);
    console.log(angle, i, bin);

    assert.equal(i, bin, angle + " " + i + " " + bin)
  })
}

function binFor(angle, bins) {
  if (angle < 0) {
    angle += 180;
  }
  var size = 90 / bins;
  angle += size;
  angle %= 180;

  var bin = Math.floor(angle / 181 * bins);
  return bin;
}