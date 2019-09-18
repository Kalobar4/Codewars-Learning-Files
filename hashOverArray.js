const list = arr => {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    console.log(arr[0].name)
    return arr[0].name;
  } else if (arr.length === 2) {
    console.log(`${arr[0].name} & ${arr[1].name}`);
    return `${arr[0].name} & ${arr[1].name}`
  } else {
    newArr = [];
    for (i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i].name)
    }
    let result1 = newArr.join(', ')
    let a = arr[(arr.length - 1)].name
    console.log(`${result1} & ${a}`)
    return `${result1} & ${a}`
  }
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'
// list([{ name: 'Bart' }, { name: 'Lisa' }])
// // returns 'Bart & Lisa'
// list([{ name: 'Bart' }])
// // returns 'Bart'
// list([])
// returns ''


/// Alternate Solutions to Study ///

function list2(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

/// Alternate Solutions to Study ///

function list3(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

/// Alternate Solutions to Study!!!!! ///
var list4 = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

/// Alternate Solutions to Study ///
function list5(names) {
  return names.reduce(function (prev, curr, i, arr) {
    return prev + curr.name + (i < arr.length - 2 ? ', ' : i == arr.length - 2 ? ' & ' : '');
  }, '');
}

/// Alternate Solutions to Study!!!!! ///
function list6(names) {
  return names
    .map((item) => item.name)
    .join(', ')
    .replace(/,\s([^,]+)$/, ' & $1');
}