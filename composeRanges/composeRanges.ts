export function composeRanges(nums: number[]): string[] {
  console.log(nums)
  let newArr = []

  const sortedArr = nums.sort((a, b) => a - b)
  console.log(sortedArr)

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] + 1 === sortedArr[i + 1]) {
      newArr.push(sortedArr[i])
    }
  }

  console.log(newArr)
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));