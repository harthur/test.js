var assert = require("assert");

function getRect(matrix, x, y, width, height) {
  var square = new Array(height);

  for (var i = 0; i < height; i++) {
    square[i] = new Array(width);

    for (var j = 0; j < width; j++) {
      square[i][j] = matrix[y + i][x + j];
    }
  }
  return square;
}

function getRect2(matrix, x, y, width, height) {
  matrix = matrix.slice(y, y + height);
  for (var i = 0; i < height; i++) {
    matrix[i] = matrix[i].slice(x, x + width)
  }
  return matrix;
}

var matrix = [];
for (var i = 0; i < 400; i++) {
  matrix[i] = new Array(400);
  for (var j = 0; j < 400; j++) {
    matrix[i][j] = i * j;
  }
}

console.time("orig");
for (var i = 0; i < 10000; i++) {
  rect1 = getRect(matrix, 40, 30, 100, 100)
}
console.timeEnd("orig")

console.time("slice");
for (var i = 0; i < 10000; i++) {
  rect2 = getRect2(matrix, 40, 30, 100, 100)
}
console.timeEnd("slice")

assert.deepEqual(rect1, rect2)


console.time("orig");
for (var i = 0; i < 10000; i++) {
  rect1 = getRect(matrix, 40, 30, 10, 10)
}
console.timeEnd("orig")

console.time("slice");
for (var i = 0; i < 10000; i++) {
  rect2 = getRect2(matrix, 40, 30, 10, 10)
}
console.timeEnd("slice")

assert.deepEqual(rect1, rect2)
