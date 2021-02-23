export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  console.log(inputArray)

  let arr = []

  for (let i = 2; i < inputArray.length + 1; i++) {
    arr.push(Math.abs(inputArray[i - 2] - inputArray[i - 1]))
  }

  return Math.max(...arr)
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));