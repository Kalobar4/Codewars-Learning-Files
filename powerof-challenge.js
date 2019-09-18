// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If the solution exists for parameters (num,p) => return k, if not return -1.

const digPow = (num, p) => {
  num = num.toString()
  val = 0;
  for (i = 0; i < num.length; i++) {
    val += (num[i]) ** (p + i)
  }
  if (val % num === 0) {
    return val / num;
  } else {
    return -1;
  }
}

// digPow(89, 1) // should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) // should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) // should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) // should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


/// ALTERNATE SOLUTIONS TO STUDY ///
function digPow2(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

/// ALTERNATE SOLUTIONS TO STUDY ///
function digPow3(n, p) {
  var ans = ('' + n).split('')
    .map(function (d, i) { return Math.pow(+d, i + p) })
    .reduce(function (s, v) { return s + v }) / n
  return ans % 1 ? -1 : ans
}
/// ALTERNATE SOLUTIONS TO STUDY ///
function digPow4(n, p) {
  var ans = n.toString().split('')
    .map((v, i) => Math.pow(parseInt(v), i + p))
    .reduce((a, b) => a + b) / n;
  return ans % 1 == 0 ? ans : -1;
}


