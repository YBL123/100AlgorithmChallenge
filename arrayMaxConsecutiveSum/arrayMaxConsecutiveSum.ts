export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  console.log(inputArray)
  console.log(k)

  let arr = []

  for (let i = 2; i < inputArray.length + 1; i++) {
    arr.push(inputArray[i - 2] + inputArray[i - 1])
  }

  console.log(arr)

  return Math.max(...arr)

}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));


// for (let i=2; i < inputArray.length + 1; i+=2 ) {
//   arr.push(inputArray[i - 2] + inputArray[i - 1])
// }