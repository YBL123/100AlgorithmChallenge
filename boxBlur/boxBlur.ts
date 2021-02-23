export function boxBlur(image: number[][]): number[][] {
  // console.log(image)
  let flatArr = image.flat()
  // console.log(flatArr)
  let sumAll = flatArr.reduce((acc, curr) => acc + curr)
  // console.log(sumAll)
  let arrLength = flatArr.length
  // console.log(arrLength)

  let res = sumAll / arrLength
  // console.log(Math.floor(res))

  return [[Math.floor(res)]]

}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));


    // let flatArr = image.flat()
    // console.log(flatArr)
    
    
    // let res = flatArr.reduce((acc, curr) => acc + curr) / flatArr.length
    // console.log(Math.floor(res))
  
    // return [[Math.floor(res)]]
