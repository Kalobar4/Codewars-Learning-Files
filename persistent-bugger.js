///Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = num => {
  let numString = num.toString()  // starts at '999';
  let persistenceCount = 0;
  let initialTestResult = false;
  // Function: Initial test of whether further recursion is needed
  const initialTest = (str) => {
    let str0Length = str.length;
    let newNum0String = 1;
    while (str0Length > 0) {
      newNum0String *= str[str0Length - 1]
      str0Length -= 1;
    }
    console.log(newNum0String, 'initial test result');
    console.log(newNum0String.toString().length, 'initial test result length');
    if (newNum0String.toString().length == 1) {
      initialTestResult = true;
      console.log(persistenceCount, 'final persistence count');
      return persistenceCount;
    }
  }
  initialTest(numString)

  /// Function: Recursively calculate product of integers /increase persistence count
  const multiply = str => {
    let newNumString = numString[0];
    let strLength = str.length
    while (strLength > 1) {
      newNumString *= str[strLength - 1]
      strLength -= 1;
    }
    persistenceCount += 1
    console.log(newNumString, 'multiplication result');
    console.log(persistenceCount, 'persistence count')
    if (newNumString.toString().length === 1) {
      return persistenceCount;
    } else {
      multiply(newNumString.toString())
    }
  }
  if (initialTestResult === false) {
    multiply(numString);
  }
  console.log(persistenceCount, 'final persistence count')
  return persistenceCount
}

persistence(999)




 // if (numString.length === 1) { console.log(persistenceCount, 'final persistence count'); return persistenceCount };

  // const test2 = numString[0] * numString[1]
  // const test2str = test2.toString()
  // if (test2str.length === 1) { console.log(persistenceCount, 'final persistence count'); return persistenceCount }