// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

//  Directions Reduction
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

const dirReduc = (arr) => {
  console.log(arr)
  let remove = (arr) => {
    for (i = 1; i < arr.length; i++) {
      currentTerm = (`${arr[i - 1]}${arr[i]}`)
      if (currentTerm === 'NORTHSOUTH' || currentTerm === 'SOUTHNORTH' || currentTerm === 'EASTWEST' || currentTerm === 'WESTEAST') {
        arr.splice((i - 1), 2);
        remove(arr);
        console.log(arr);
      }
    }
    return arr
  };
  remove(arr);
  return arr;
}



dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])  // Returns ["WEST"]
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])  // Returns ["NORTH", "WEST", "SOUTH", "EAST"]
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // Returns  []



///  ALTERNATE SOLUTIONS TO STUDY ///
function dirReduc2(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}

///  ALTERNATE SOLUTIONS TO STUDY ///
function dirReduc3(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}


///  ALTERNATE SOLUTIONS TO STUDY ///
function dirReduc4(arr) {
  var opposite = { "SOUTH": "NORTH", "NORTH": "SOUTH", "WEST": "EAST", "EAST": "WEST" }
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}