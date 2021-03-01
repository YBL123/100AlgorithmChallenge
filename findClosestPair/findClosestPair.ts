export function findClosestPair(numbers: number[], sum: number): number {
  console.log(numbers)
  console.log(sum)

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < sum; i++) {
      // if (numbers[i] + numbers[i + 1] === sum) {
      //   console.log('hi')
      // }
    }
    
  }
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));