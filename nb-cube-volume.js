let n = 0;
let result = 0;
const findNb = num => {

  if (num < 0) {
    console.log('-1 is the return');
    return result = -1;
  } else if (num == 0) {
    console.log(n - 1, 'is the return');
    return result = (n - 1);
  } else {
    console.log(n);
    num -= (n * n * n);
    console.log(num)
    n += 1;
    findNb(num);
  }
  // console.log(result)
  return result
};

//findNb(1071225) // Returns --> 45
findNb(135440716410000)


/// Optimization /// info for testing & optimization
//findNb(1071225) // Returns --> 45
// Test.assertEquals(findNb(4183059834009), 2022)
// Test.assertEquals(findNb(24723578342962), -1)
// Test.assertEquals(findNb(135440716410000), 4824)
// Test.assertEquals(findNb(40539911473216), 3568)






