// A format for expressing an ordered list of integers is to use a comma separated list of either individual integers  or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.The range includes all integers in the interval including both endpoints.It is not considered a range unless it spans at least 3 numbers.For example("12, 13, 15-17")

const solution = list => {
  let result1 = []

  const consecutiveFunction = (num1, num2) => {
    let push
    if (num1 - result1[result1.length - 1] > 1
      && result1.length !== 0) {
      result2.push(`${result1[0].toString()}-${result1[result1.length - 1].toString()}`);
      push = 1;
      result1 = [];
    }
    if (!result1.includes(num1)) { result1.push(num1) };
    if (!result1.includes(num2)) { result1.push(num2) }
    if (push === 0 && num2 == list[list.length - 1]) {
      result2.push(`${result1[0].toString()}-${result1[result1.length - 1].toString()}`);
    }
  };

  const nonConsecutiveFunction = (num1, num2) => {
    if (result1.length !== 0) {
      result2.push(`${result1[0].toString()}-${result1[result1.length - 1].toString()}`);
      result1 = [];
    }
    if (num2 - num1 !== -1) {
      result2.push(list[i].toString());
    }
  };

  let result2 = [];
  for (i = 0; i < list.length; i++) {
    (list[i + 1] - list[i]) === 1 ? consecutiveFunction(list[i], list[i + 1]) : nonConsecutiveFunction(list[i], list[i - 1]);
  };

  const combineResult = (result1, result2) => {
    if (result1.length !== 0) {
      result2.push(`${result1[0].toString()}-${result1[result1.length - 1].toString()}`);
    };
    result2.map(function (elem) {
      let split = elem.split('-')
      let eval = parseInt(split[1]) - parseInt(split[0])
      if (eval === 1) { result2.splice(result2.indexOf(elem), 1, split[0], split[1]) }
      let eval2 = parseInt(split[1]) - parseInt(split[3])
      if (eval2 === 1) { result2.splice(result2.indexOf(elem), 1, `-${split[1]}`, `-${split[3]}`) }
    })
  }
  combineResult(result1, result2)
  combineResult(result1, result2)
  return (result2.toString())
}






////  Alternate Solutions  /////

function solution2(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}



////  Alternate Solutions  /////
function solution3(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
  }
  return list.join();
}

////  Alternate Solutions  /////
function solution4(list) {
  var s = '';
  var l = list.length;
  for (var i = 0; i < l; i++) {
    if (list[i] == list[i + 2] - 2) {
      s += list[i] + '-';
      for (i; i < l; i++) {
        if (list[i] != list[i + 2] - 2) break;
      }
    } else {
      s += list[i];
      if (i != l - 1) s += ',';
    }
  }
  return s;
}
////  Alternate Solutions  /////
function solution5(list) {
  return list
    .reduce((acc, n, i, arr) => {
      if (n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length - 1]}` : arr)
    .join(',');
}

////  Alternate Solutions  /////
solution6 = l =>
  l.map((a, b, c) => (a - 1 == c[b - 1] && a + 1 == c[b + 1] ? "-" : a))
    .map((x, y, z) => (x != z[y + 1] ? x : "@"))
    .filter(a => a != "@")
    .join(",")
    .replace(/(,-,)/g, "-");

////  Alternate Solutions  /////
function solution7(list) {
  for (var a = [], i = 0; i < list.length;) {
    for (var j = 1; i + j < list.length && list[i + j] == list[i] + j; j++);
    if (j >= 3) { a.push(`${list[i]}-${list[i + j - 1]}`); i += j; }
    else a.push(list[i++]);
  }
  return a.join(',');
}

////  Alternate Solutions  /////
function solution8(nums) {
  nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
  return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
}


////  Alternate Solutions  /////
function solution9(list) {

  var str = "";

  if (list && list.length > 0) {

  } else {
    return "";
  }
  var f = false;
  var bean = "";
  var beginlast = "";
  var lastnum = 9007199254740992;
  for (var i = 0; i < list.length; i++) {

    if (f == false && (lastnum != list[i] - 1)) {
      if (i != 0) {
        bean += ",";
      }
      bean += list[i];
      lastnum = list[i];
      beginlast = "" + list[i];
      f = false;
    } else if (f == true && (lastnum != list[i] - 1)) {
      if (lastnum - beginlast == 1) {
        bean += "," + lastnum;
      } else {
        bean += "-" + lastnum;
      }
      if (i != 0) {
        bean += ",";
      }
      bean += list[i];
      lastnum = list[i];
      beginlast = "" + list[i];
      f = false;
    } else if (lastnum == list[i] - 1) {
      if (i == list.length - 1) {
        bean += "-" + list[i];
      }
      lastnum = list[i];
      f = true;
    }

  }
  return bean;
}
////  Alternate Solutions  /////
function solution10(list) {
  var resultArray = new Array();
  var firstElement = list[0];
  var lastElement = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] == list[i - 1] + 1) {
      lastElement = list[i];
    }
    else {
      if (firstElement != lastElement) {
        if (firstElement + 1 == lastElement) {
          resultArray.push(firstElement + "," + lastElement);
        }
        else {
          resultArray.push(firstElement + "-" + lastElement);
        }
        lastElement = list[i];
      }
      else {
        resultArray.push(lastElement);
        lastElement = list[i];
      }
      firstElement = list[i];
    }
  }

  if (firstElement != lastElement) {
    resultArray.push(firstElement + "-" + lastElement);
  }
  else {
    resultArray.push(lastElement);
  }

  return resultArray.join(',');
}
////  Alternate Solutions  /////
function solution11(list) {
  var stack = [];
  var strList = [];
  list.forEach(function (val, i) {
    stack.push(val);
    if (!isConsecutive(stack)) {
      stack.pop(); //clean up stack
      strList.push(rangeExtract(stack));
      stack = [];
      stack.push(val); //fresh stack
    }
  });
  strList.push(rangeExtract(stack)); //extract remaining
  return strList.join(',');
}

function rangeExtract(arr) {
  if (arr.length >= 3) {
    return convertToList(arr);
  } else {
    return convertToCommas(arr);
  }
}

function isConsecutive(arr) {
  if (arr.length == 1) return true;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != 1) {
      return false;
    }
  }
  return true;
}

function convertToList(arr) {
  return arr[0] + '-' + arr[arr.length - 1];
}

function convertToCommas(arr) {
  return arr.join(',');
}



////  Alternate Solutions  /////

function solution12(list) {
  // TODO: complete solution 
  var res = list.slice();

  for (var i = 0; i < list.length; ++i) {
    if (i === 0 || i === list.length - 1) continue;
    if (res[i] - 1 === list[i - 1] && res[i] + 1 === list[i + 1]) {
      res[i] = null;
    }
  }

  return res.toString().replace(/,{2,}/g, '-');
}

////  Alternate Solutions  /////
function solution13(list) {
  return list.map((num, i) => {
    let next = list[i + 1], previous = list[i - 1];
    return (Math.abs(next - num) == 1 && Math.abs(num - previous) == 1) ? '-' : num;
  }).toString().replace(/(,-)+,/g, '-');
}




// solution([-96, -93, -90, -89, -86, -84, -81, -79, -76, -74, -71, -70])
// returns '-96,-93,-90,-89,-86,-84,-81,-79,-76,-74,-71,-70'
//solution([-67, -64, -61, -59, -57, -54, -53, -52, -49, -47, -46, -44, -42, -41])
// returns '-67,-64,-61,-59,-57,-54--52,-49,-47,-46,-44,-42,-41'
//solution([-88, -86, -83, -80, -79, -76, -74, -73, -70, -69, -66, -65, -63, -62])
// returns '-88,-86,-83,-80,-79,-76,-74,-73,-70,-69,-66,-65,-63,-62'
//solution([-71, -70, -68, -67, -64, -62, -60, -59, -56, -55, -53, -51, -49, -48, -45, -43, -40, -39, -38])
// returns '-71,-70,-68,-67,-64,-62,-60,-59,-56,-55,-53,-51,-49,-48,-45,-43,-40--38'
//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"
// solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20])
// // returns '-3--1,2,10,15,16,18-20'
//solution([-76, -75, -73, -71, -68, -66, -64, -61, -58, -56, -53, -51, -48, -47])
// //  returns '-76,-75,-73,-71,-68,-66,-64,-61,-58,-56,-53,-51,-48,-47'
//solution([-71, -68, -67, -65, -64, -63, -60, -57, -56, -55, -52, -51, -49])
// // returns  '-71,-68,-67,-65--63,-60,-57--55,-52,-51,-49'
//solution([-79, -76, -73, -72, -70, -68, -65, -62, -59, -57, -55, -53, -50]);
// // returns '-79,-76,-73,-72,-70,-68,-65,-62,-59,-57,-55,-53,-50'
//solution([-76, -75, -74, -72, -70, -67, -66, -64, -62, -60, -57, -54])
// // returns  '-76--74,-72,-70,-67,-66,-64,-62,-60,-57,-54'
// solution([-60, -57, -55, -53, -52, -51, -49, -46, -43, -42, -41, -40, -39, -37, -35, -33])
// // returns  '-60,-57,-55,-53--51,-49,-46,-43--39,-37,-35,-33'
//solution([-52, -50, -49, -48, -45, -43, -41, -38, -37, -36, -33, -30, -27, -24, -22, -21, -18])
// // returns '-52,-50--48,-45,-43,-41,-38--36,-33,-30,-27,-24,-22,-21,-18'

// solution([-55, -54, -53, -51, -48, -46, -45, -44, -43, -42, -41, -40])
// // returns  '-55--53,-51,-48,-46--40', instead got: '-51,-48,-55--53,-46--40'
//solution([-73, -71, -68, -66, -65, -63, -61, -58, -56, -54, -53, -51, -48, -45, -42, -41, -38, -35, -32])
// // returns  '-73,-71,-68,-66,-65,-63,-61,-58,-56,-54,-53,-51,-48,-45,-42,-41,-38,-35,-32'









//The following is a listing of my favorite uses of the spread operator within JavaScript:
// Calling Functions without Apply
// To this point we've called Function.prototype.apply, passing an array of arguments, to call a function with a given set of parameters held by an array:

// function doStuff (x, y, z) { }
// var args = [0, 1, 2];

// // Call the function, passing args
// doStuff.apply(null, args);
// With the spread operator we can avoid apply all together and simply call the function with the spread operator before the array:

// doStuff(...args);
// The code is shorter, cleaner, and no need to use a useless null!

// Combine Arrays
// There have always been a variety of ways to combine arrays, but the spread operator gives use a new method for combining arrays:

// arr1.push(...arr2) // Adds arr2 items to end of array
// arr1.unshift(...arr2) //Adds arr2 items to beginning of array
// If you'd like to combine two arrays and place elements at any point within the array, you can do as follows:

// var arr1 = ['two', 'three'];
// var arr2 = ['one', ...arr1, 'four', 'five'];

// // ["one", "two", "three", "four", "five"]
// Shorter syntax than other methods while adding positional control!

// Copying Arrays
// Getting a copy of an array is a frequent tasks, something  we've used Array.prototype.slice to do in the past, but we can now use the spread operator to get a copy of an array:

// var arr = [1,2,3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4)
// Remember: objects within the array are still by reference, so not everything gets "copied", per se.

// Convert arguments or NodeList to Array
// Much like copying arrays, we've used Array.Prototype.slice to convert NodeList and arguments objects and to true arrays, but now we can use the spread operator to complete that task:

// [...document.querySelectorAll('div')]
// You can even get the arguments as an array from within the signature:

// var myFn = function(...args) {
// // ...
// }
// Don't forget you can also do this with Array.from!

// Using Math Functions
// Of course the spread operator "spreads" an array into different arguments, so any function where spread is used as the argument can be used by functions that can accept any number of arguments.

// let numbers = [9, 4, 7, 1];
// Math.min(...numbers); // 1
// The Math object's set of functions are a perfect example of the spread operator as the only argument to a function.

// Destructuring Fun
// Destructing is a fun practice that I'm using a ton of on my React projects, as well as other Node.js apps.  You can use destructuring and the rest operator together to extract the information into variables as you'd like them:

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }
// The remaining properties are assigned to the variable after the spread operator!