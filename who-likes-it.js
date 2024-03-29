
const likes = names => {
  let response = '';
  const longArray = (num, arr) => {
    let numOthers = num - 2;
    let response = `${arr[(0)]}, ${arr[1]} and ${numOthers} others like this`
    return response
  }
  if (names.length < 3) {
    response = names.length === 1 ? `${names[0]} likes this` : `${names[0]} and ${names[1]} like this`;
  } else {
    response = names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : longArray(names.length, names);
  }
  if (names[0] == undefined) { response = "no one likes this" }
  console.log(names)
  console.log(response)
  return response;
}


///You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item. Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes([]) // must be "no one likes this"
likes(["Peter"]) // must be "Peter likes this"
likes(["Jacob", "Alex"]) // must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"])   // must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"])  // must be "Alex, Jacob and 2 others like this"
