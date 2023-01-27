// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  matrix = matrix.map((item, index) => {
    if (index % 2 !== 0) {
      return item.reverse();
    }
    return item;
    }).flat(Infinity);
  return matrix;
};
