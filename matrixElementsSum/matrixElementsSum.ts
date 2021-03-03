export function matrixElementsSum(matrix: any[][]): number {
  console.log(matrix)
  let arr = [...matrix]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 || arr[i - 1] === 0) {
      arr.pop(arr[i])
    }
    
  }

  console.log(arr)

}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));


// any 0 OR located anywhere below a 0 in the same column is not considered suitable