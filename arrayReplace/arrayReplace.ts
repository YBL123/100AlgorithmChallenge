export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  console.log(inputArray)

  let newArr = inputArray.map(ele => ele === elemToReplace ? substitutionElem : ele)
  return newArr
}

console.log(arrayReplace([1, 2, 1], 1, 3));