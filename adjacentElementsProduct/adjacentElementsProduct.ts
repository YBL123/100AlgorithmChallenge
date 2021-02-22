export function adjacentElementsProduct(inputArray: number[]): number {
  let x = inputArray.map((num, i) => num * inputArray[i + 1] ).filter(item => !isNaN(item))
  return Math.max(...x)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));