// You are now to create a function that returns a Josephus permutation, taking as parameters the initial array / list of items to be permuted as if they were in a circle and counted out every k places until none remained.

// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n - 1; k will always be >= 1.

// For example, with n = 7 and k = 3 josephus(7, 3) should act this way.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]

const josephus = (n, k) => {
  let nArray = [];
  let start = 0;
  for (i = 1; i < (n + 1); i++) {
    nArray.push(i)
  };
  console.log(nArray);

  // const snaketail = (arr, start) => {
  //   let newstart = (k - (arr.length - start) - 1)
  //   arr.splice(newstart, 1)
  //   start = newstart
  //   if (arr.length < 1) {
  //     return arr;
  //   } else {
  //     snaketail(arr, start)
  //   }
  // }

  const elimRound = (arr, start) => {
    elimNum = Math.floor(((arr.length - start) / k))
    console.log(elimNum);
    elimRem = (arr.length % k)
    console.log(elimRem);
    count = 0

    for (j = 1; j < (elimNum + 1); j++) {
      arr.splice((start - count + (j * k - 1)), 1)
      count++
    }
    start = k - elimRem;
    console.log('new start: ', start)
    console.log(arr)
    nArray = arr;
    if ((arr.length - start) < k) {
      if (arr.length < 1) {
        return arr;
      } else {
        // snaketail(arr, start)
      }
    } else {
      elimRound(arr, start)
    }
  }

  elimRound(nArray, start)
  console.log(arr)

};

josephus(7, 3)