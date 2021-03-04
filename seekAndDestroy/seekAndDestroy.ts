export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  console.log(arr1)
  console.log(arr2)

  return arr1.filter(el => !arr2.includes(el))

}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
