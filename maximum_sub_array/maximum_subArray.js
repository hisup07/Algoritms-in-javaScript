//-------with brute force time complexity will be T(n^3)------//
console.log("maximum");

function findMaxSubArrayBruteForce(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY;
  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length;

  for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
      maxSum = 0;
      for (var k = i; k <= j; k++) {
        maxSum += arr[k];

        if (max_so_far < maxSum) {
          leftIndex = i;
          max_so_far = maxSum;
          rightIndex = j;
        }
      }
    }
  }
  return {
    left: leftIndex,
    right: rightIndex,
    final_max_sum_subArray: max_so_far
  };
}

var array = [-2, -18, -3, -4, -12, -2, -19, -5, -4];

console.log(findMaxSubArrayBruteForce(array));

//------ devide and conquer ------//
function crossSubarray(array, left, middle, right) {
  var leftSum = Number.NEGATIVE_INFINITY;
  var rightSum = Number.NEGATIVE_INFINITY;
  var sum = 0;
  for (var i = middle; i >= left; i--) {
    if (sum + array[i] >= leftSum) {
      leftSum = sum + array[i];
    }
    sum += array[i];
  }
  sum = 0;
  for (var i = middle + 1; i < right; i++) {
    if (sum + array[i] >= rightSum) {
      rightSum = sum + array[i];
    }
    sum += array[i];
  }
  return rightSum + leftSum;
}
function maxSubArrayPart(array, left, right) {
  if (right - left <= 1) {
    return array[left];
  }
  var middle = Math.floor((left + right) / 2);
  var leftSum = maxSubArrayPart(array, left, middle);
  var rightSum = maxSubArrayPart(array, middle, right);
  var crossSum = crossSubarray(array, left, middle, right);
  return Math.max(leftSum, rightSum, crossSum);
}
function maxSubArray(array) {
  return maxSubArrayPart(array, 0, array.length);
}
console.log(maxSubArray([-2, -18, -3, -4, -12, -2, -19, -5, -4]));
