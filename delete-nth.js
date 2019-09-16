// Alice and Bob were on a holiday.Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats.He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.For example if N = 2, and the input is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2], drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to[1, 2, 3, 1, 2, 3].

const deleteNth = (arr, num) => {
  console.log(arr, num)
  // create an object {arr[0]: count, arr[1]:count2}
  let repeat = {};

  /// Define Functions
  // object to record number of times a value repeats in original array
  const repeatFunction = (x) => { repeat[x] = (repeat[x] || 0) + 1 }

  // create a function to get indices of repeat values > num
  const getAllIndices = (arr, val) => {
    let indices = [], i, count3 = 0, spliceAdjust = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].toString() === val) {
        indices.push(i);
      }
    }
    console.log(indices)
    console.log(arr)
    indices.map(e => {
      count3++
      if (count3 > num) {
        arr.splice((e - spliceAdjust), 1);
        spliceAdjust++;
      }
    })
    console.log(arr)
    return arr
  }

  // create new array using max defined in repeat object by identifying index of elements exceeding num and not pushing those elements to new array
  const createNewArr = (arr, repeat) => {
    for (var j in repeat) {
      if (repeat[j] > num) {
        console.log(j, ':', repeat[j]);
        // Find index of elements in array with count>num
        console.log(arr, j)
        getAllIndices(arr, j)
      }
    };
    return arr
  }

  ///  Execute Code ///
  // run repeat function
  for (i = 0; i < arr.length; i++) {
    repeatFunction(arr[i]);
    console.log(repeat);
  }
  // identify indices of repeate values and splice remove repeat elements
  createNewArr(arr, repeat)
  console.log(arr, 'is being returned')
  return arr
}

// deleteNth([1, 1, 1, 1], 2) // return [1,1]
// deleteNth([20, 37, 20, 21], 1) // return [20,37,21]
deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3) // Expected: [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
// deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]



/// Other Solutions to Study ///

function deleteNth2(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

/// Other Solutions to Study ///
function deleteNth3(arr, x) {
  var count = {};
  return arr.filter(function (a) {
    count[a] = ~~count[a] + 1;
    return count[a] <= x;
  })
}//z.

/// Other Solutions to Study ///


function deleteNth4(arr, x) {
  return arr.reduce(function (a, v) {
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z) {
  return arr.filter(function (q) { return z == q }).length;
}

/// Other Solutions to Study ///

function deleteNth5(arr, x) {
  while (true) {
    for (var i = 0; i < arr.length; ++i) {
      var count = 0;

      for (var j = 0; j < arr.length; ++j) {

        if (arr[i] === arr[j]) {
          ++count;

          if (count > x) {
            arr.splice(j, 1);
            break;
          }
        }
      }
      if (j !== arr.length) break;
    }
    if (i === arr.length) break;
  }

  return arr;
}

/// Other Solutions to Study ///

const deleteNth6 = (a, x) => {
  let m = {};
  return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);
}


/// Other Solutions to Study!!! ///

function deleteNth7(arr, x) {
  var obj = {}
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}