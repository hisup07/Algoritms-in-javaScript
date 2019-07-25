// simple algorithm in quick sort
var arr = [5, 3, 4, 1, 8, 2, 4, 3];

function qSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  //pivot can be any number inside the array
  let left = [],
    right = [];
  rest.forEach(el => (el < pivot ? left.push(el) : right.push(el)));
  return qSort(left)
    .concat(pivot)
    .concat(qSort(right));
}
console.log(qSort(arr)); // [1, 2, 3, 3, 4, 4, 5, 8]]
