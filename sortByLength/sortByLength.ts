export function sortByLength(inputArray: string[]): string[] {

  return inputArray.sort((a, b) => a.length - b.length)

}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));



// Given an array of strings, sort them in the order of increasing lengths. 
// If two strings have the same length, their relative order must be the same as in the initial array.