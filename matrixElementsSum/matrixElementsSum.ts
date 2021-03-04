export function matrixElementsSum(matrix: any[][]): number {

  let priceTotal = 0
  let ignoreArr = []

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 ) {
        ignoreArr.push(j)
      } else if (ignoreArr.indexOf(j) === -1) {
        priceTotal += matrix[i][j]
      }
    }
}

  return priceTotal


}
console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

// [0, 1, 1, 2],   
// [0, 5, 0, 0], 
// [2, 0, 3, 3]

// [x, 1, 1, 2], 
// [x, 5, x, x], 
// [x, x, x, x]

// any 0 OR located anywhere below a 0 in the same column is not considered suitable