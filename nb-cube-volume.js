let volume = 0;
let n = 1;

const findNb = num => {
  if (num == 1) {
    volume += 1;
    console.log(volume);
    return volume;
  } else {
    num -= (n * n);
    n += 1;
    findNb(num);
  }
}


findNb(1);
findNb(1071225)





// findNb(1071225) // Returns --> 45
// findNb(91716553919377) // Returns --> -1

// Test.assertEquals(findNb(4183059834009), 2022)
// Test.assertEquals(findNb(24723578342962), -1)
// Test.assertEquals(findNb(135440716410000), 4824)
// Test.assertEquals(findNb(40539911473216), 3568)