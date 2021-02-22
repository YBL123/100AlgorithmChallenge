export function allLongestStrings(inputArray: string[]): string[] {
  let longestString = inputArray.sort((a, b) => b.length - a.length)[0]
  let x = inputArray.filter(item => longestString.length === item.length)
  console.log(x)
  return x
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));