// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.  For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.  As an added challenge, upper - and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.For example, the input 'sTreSS' should return 'T'.  If a string contains all repeating characters, it should return an empty string("") or None-- see sample tests.

const firstNonRepeatingLetter = str => {
  const arr = str.split('')
  const arr2 = str.toLowerCase().split('')
  const obj = {};
  let count = 0
  for (i = 0; i < arr2.length; i++) {
    obj[arr2[i]] ? obj[arr2[i]]++ : obj[arr2[i]] = 1
  }
  for (j = 0; j < arr.length; j++) {
    if (obj[arr[j].toLowerCase()] === 1 && count < 1) {
      return arr[j]
      count++
    }
  }
  return ""
}


firstNonRepeatingLetter('a') // , 'a';
firstNonRepeatingLetter('streSS') //, 't';
firstNonRepeatingLetter('moonmen') //, 'e';
firstNonRepeatingLetter('moonmeen') //, '';


///  Alternate Solutions ///

function firstNonRepeatingLetter2(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

///  Alternate Solutions ///

function firstNonRepeatingLetter3(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}

///  Alternate Solutions ///
function firstNonRepeatingLetter4(s) {
  return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1)] || '';
}

///  Alternate Solutions ///
const firstNonRepeatingLetter5 = s =>
  s[[...s.toLowerCase()].findIndex((c, _, s) => s.indexOf(c) === s.lastIndexOf(c))] || "";