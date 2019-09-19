//  Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.


String.prototype.camelCase = function () {
  let cc = this.trim().split(' ')
  if (cc == "") {
    console.log('input is an empty string')
    return ""
  }
  result = []
  for (i = 0; i < cc.length; i++) {
    word = cc[i].split()
    let capital = (cc[i][0].toUpperCase());
    let letter = (word[0].split(''));
    letter.splice(0, 1, capital);
    result.push(letter.join(''));
  }
  console.log(result);
  console.log(result.join(''));
  return (result.join(''))
}


// "hello case".camelCase() // Returns HelloCase
//"test case".camelCase() // , "TestCase")
//"camel case method".camelCase() // , "CamelCaseMethod");
//"say hello ".camelCase() // , "SayHello");
" camel case word".camelCase() // , "CamelCaseWord");
"".camelCase() // , "");

/// Alternate Solution to Study ///
String.prototype.camelCase2 = function () {
  return this.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

/// Alternate Solution to Study ///
String.prototype.camelCase3 = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

/// Alternate Solution to Study ///
String.prototype.camelCase4 = function () {
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}


/// Alternate Solution to Study ///
String.prototype.camelCase5 = function () {
  const capitalize = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  }

  return this
    .split(' ')
    .map(capitalize)
    .join('')
}


/// Alternate Solution to Study ///
String.prototype.camelCase6 = function () {
  return this.split(/\s/)
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join('');
}
