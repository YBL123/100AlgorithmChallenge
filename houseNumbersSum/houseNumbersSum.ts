export function houseNumbersSum(inputArray: number[]): number {
  
  const res = [...new Set(inputArray)]

  return res.reduce((a, b) => a + b)

}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));