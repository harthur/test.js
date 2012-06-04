
function scale(width, height) {
  var min = Math.min(width, height);
  var max = Math.max(width, height)
  var scale = Math.min(max, 200) / max;
  return scale;
}

console.log(scale(400, 400))
console.log(scale(100, 100))
console.log(scale(200, 200))
console.log(scale(400, 200))
