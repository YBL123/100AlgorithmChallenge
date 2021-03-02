export function flattenArray(arr: any[]): any[] {
  const result = []

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result.push(...flattenArray(el))
    } else {
      result.push(el)
    }
  })
  
  return result


}

console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
