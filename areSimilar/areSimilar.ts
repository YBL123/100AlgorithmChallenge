export function areSimilar(a: number[], b: number[]): boolean {
  let aArr = a.sort((a, b) => a - b)
  let bArr = b.sort((a, b) => a - b)

  return aArr.every((el, i) => aArr[i] === bArr[i])
  
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
