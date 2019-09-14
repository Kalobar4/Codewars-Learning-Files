// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncode = (str2) => {
  let str = str2.toLowerCase().split('')
  console.log(str);
  let duplicate = {};
  let repeatFunction = (x) => { duplicate[x] = (duplicate[x] || 0) + 1 }
  for (i = 0; i < str.length; i++) {
    repeatFunction(str[i]);
  }
  console.log(duplicate);
  for (var prop in duplicate) {
    if (duplicate[prop] === 1) {
      duplicate[prop] = '(';
    } else {
      duplicate[prop] = ')'
    }
  }
  console.log(duplicate);
  var res = []
  for (k = 0; k < str.length; k++) {
    res.push(duplicate[str[k]]);
  }
  console.log(res.join(''))
  return res.join('');
}

// duplicateEncode('din')
// duplicateEncode('(( @')
duplicateEncode('Success')

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode3(word) {
  word = word.toLowerCase();
  console.log(word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'));
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

duplicateEncode3('Success')

function duplicateEncode4(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function (c, i) {
    return letters.some(function (x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}

function duplicateEncode5(string) {
  var occurances = string.toLowerCase().split('').reduce(function (occ, cha) {
    occ[cha] = (occ[cha] || 0) + 1;
    return occ;
  }, {});
  return string.toLowerCase().replace(/[\S\s]/g, function (cha) {
    return occurances[cha] > 1 ? ')' : '(';
  });
}

const duplicateEncode6 = s => s
  .toLowerCase()
  .split``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join``;
