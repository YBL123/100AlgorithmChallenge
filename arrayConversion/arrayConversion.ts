export function arrayConversion(inputArray: number[]): number {
  // let x = inputArray.reduce((acc, curr, currI) =>  )
  let arr = []
  let newArr = []
  for (let i=2; i < inputArray.length + 1; i+=2 ) {
    arr.push(inputArray[i - 2] + inputArray[i - 1])
  }
  for (let j=2; j < arr.length + 1; j+=2) {
    newArr.push(arr[j - 2] * arr[j - 1])
  }
  console.log(newArr)
  return newArr.reduce((acc, curr) => acc + curr)
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
