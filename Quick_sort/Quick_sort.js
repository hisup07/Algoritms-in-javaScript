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

//------quick sort another way-----

function quickSort(arr) {
  var left = 0;
  var right = arr.length - 1;

  return qSort(arr, left, right);
}
function qSort(arr, left, right) {
  var len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    qSort(arr, left, partitionIndex - 1);
    qSort(arr, partitionIndex + 1, right);
  }

  return arr;
}
function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([11, 8, 14, 3, 6, 2, 7, 0, 6])); //[0, 2, 3, 6, 6, 7, 8, 11, 14]
