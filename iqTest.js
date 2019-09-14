const iqTest = (numbers) => {
  let countOdd = 0;
  let countEven = 0;
  let result = null;
  let numArray = numbers.split(' ')  // returns an array of strings split by whitespace
  let oddEven = numArray.map((str) => {
    if (parseInt(str) % 2 === 0) {
      countEven += 1;
    } else { countOdd += 1 };
    return parseInt(str) % 2
  })
  console.log(numbers)
  console.log(oddEven)
  console.log(oddEven.indexOf(1));
  console.log(countOdd);
  console.log(countEven);
  if (countOdd > countEven) { console.log('even number is different at index: ' + oddEven.indexOf(0)); return (oddEven.indexOf(0) + 1) } else { console.log('odd number is different at index: ' + oddEven.indexOf(1)); return (oddEven.indexOf(1) + 1) }
}

function iqTest3(numbers) {
  numbers = numbers.split(" ").map(function (el) { return parseInt(el) });

  var odd = numbers.filter(function (el) { return el % 2 === 1 });
  var even = numbers.filter(function (el) { return el % 2 === 0 });

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}


iqTest("2 4 7 8 10")


function iqTest2(numbers) {
  numbers = numbers.split(" ").map(function (x) { return parseInt(x) % 2; });
  if (numbers[0] + numbers[1] + numbers[2] == 3 || numbers[0] + numbers[1] + numbers[2] == 2) return numbers.indexOf(0) + 1;
  else return numbers.indexOf(1) + 1;
}