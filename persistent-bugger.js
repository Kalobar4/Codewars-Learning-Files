///Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// let numString = num.toString() 
const persistence = num => {
  let str78 = num.toString()
  let count = 0;
  let test1 = false;

  if (str78.length === 1) {
    test1 = true;
  }

  const multiplyDigits = str => {
    if (test1 === true) { return };
    count++
    let product = 1
    let length = str.length
    while (length > 0) {
      product *= str[length - 1]
      length -= 1;
    }
    if (product < 10) {
      console.log(count)
      return count;
    } else {
      let product2 = product.toString();
      multiplyDigits(product2)
    }

  }

  multiplyDigits(str78)

  console.log(count);
  return count;

}

persistence(999)


///  Other Solutions to learn from ///

function persistence2(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }

  return times;
}


///  Other Solutions to learn from ///

const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
}

///  Other Solutions to learn from ///