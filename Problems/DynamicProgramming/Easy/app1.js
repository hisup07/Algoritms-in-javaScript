// name : minimun cost climbing staircase

//On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
/* Once you pay the cost, you can either climb one or two steps.
 You need to find minimum cost to reach the top of the floor, 
 and you can either start from the step with index 0,
 or the step with index 1.
 */

//this problem has the optimum substructure property

//f[i] = cost[i] + min(f[i+1], f[i+2])

//we can get to the ith stair , either from i-2 or from i-1;

function minimumCostClimbingStair(cost) {
  var n = cost.length;
  var dp = Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (var i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

var cost1 = [10, 15, 20];
console.log(minimumCostClimbingStair(cost1)); //return 15

var cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minimumCostClimbingStair(cost2)); //return 6
