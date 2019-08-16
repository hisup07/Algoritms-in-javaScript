var backspaceCompare = function(S, T) {
  return buildString(S) == buildString(T);
};

function buildString(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) != "#") {
      arr.push(str.charAt(i));
    } else if (arr.length != 0) {
      arr.pop();
    }
  }
  console.log(arr.join(""));
}

buildString("ahs##");
