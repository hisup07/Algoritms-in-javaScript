// insertion sort
//   for i = 1,2,3,....n
//   insert A[i] into sorted arry A[0,i-1]
//   by pair wise swap down to the correct position

// ------ sorting incresing order insertion sort -------

var array1 = [5, 2, 4, 6, 1];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSort(array1));
console.log(array1);

///we can do a binary search on A[0;i-1] at sorted array
// in this way the complexity will reduce very much 0(nlogn);

// Merge sorting
// it uses devide and coquer algoritm , standerd recursive algorithm

function mergeSort(org) {
  if (org.length == 1) {
    return org;
  }
  let mid = Math.floor(org.length / 2),
    left = org.slice(0, mid),
    right = org.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let lindex = 0,
    rindex = 0,
    result = [];
  while (lindex < left.length && rindex < right.length) {
    if (left[lindex] > right[rindex]) {
      result.push(right[rindex]);
      rindex++;
    } else {
      result.push(left[lindex]);
      lindex++;
    }
  }
  return result.concat(left.slice(lindex), right.slice(rindex));
}

var ar = [1, 5, 3, 6, 2, 8, 1];
console.log(mergeSort(ar));
