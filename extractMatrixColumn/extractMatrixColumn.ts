export function extractMatrixColumn(matrix: number[][], column: number): number[] {
  console.log(matrix)
  let arr = []
  let resArr = []
  const subArr = matrix.forEach((subArr, i) => {
    console.log(subArr[column])
    arr.push(subArr[column])
  })
  return arr
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));