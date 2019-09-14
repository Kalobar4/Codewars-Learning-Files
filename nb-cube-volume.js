//  Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.  You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?  The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.  //

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






