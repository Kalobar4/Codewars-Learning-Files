// Task is to add up letters to one letter.
// The function will be given a variable amount of arguments, each one being a letter to add. Letters will always be lowercase.  Letters can overflow (see second to last example of the description).  If no letters are given, the function should return 'z'

const addLetters = (...args) => {
  console.log(args)
  if (args.length === 0) { return 'z' }
  let res = 0;
  let num = 0
  for (i = 0; i < args.length; i++) {
    num = (args[i].charCodeAt(0) - 96)
    res += num;
  }
  if (res <= 26) {
    console.log(String.fromCharCode(res + 96))
    return String.fromCharCode(res + 96)
  } else {
    res2 = res % 26;
    if (res2 === 0) {
      return 'z'
    } else {
      console.log(String.fromCharCode(res2 + 96))
      return String.fromCharCode(res2 + 96)
    }
  }
};



// addLetters('a', 'b', 'c') // returns 'f'
// addLetters('a', 'b') // returns 'c'
// addLetters('z') // returns 'z'
// addLetters('z', 'a') // returns 'a'
// addLetters('y', 'c', 'b') // returns 'd' // notice the letters overflowing
// addLetters() // returns 'z'
// addLetters("v", "x", "z", "l", "v", "u", "c", "r", "b", "f")
// addLetters("d", "r", "c", "p", "d", "q", "q", "y")
// addLetters("z", "p", "b", "s", "r", "d", "s")



///  Additional code from which to learn ///

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args.join(separator))
  return args.join(separator);
}
// myConcat(', ', 'red', 'orange', 'blue');
