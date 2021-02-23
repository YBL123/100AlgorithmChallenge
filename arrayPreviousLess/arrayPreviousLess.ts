export function arrayPreviousLess(items: number[]): number[] {
  console.log(items)
  let arr = []

  // let x = items.map((_el, i) => {
  //   if (items[i] > items[i - 1]) {
  //     return items[i - 1]
  //   } else {
  //     return -1
  //   }
  // })
  // return x

  for (let i = 0; i < items.length; i++) {
    console.log(items[i])
    console.log(items[i] < items[i + 1])
    console.log(items[i - 1])
    if (items[i] > items[i - 1]) {
      console.log(items[i])
      arr.push(items[i - 1])
    } else {
      arr.push(-1)
    }
    
  }

  console.log(arr)
  return arr

}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));