export function compareIntegers(a: string, b: string): string {
  console.log(a, b)
  const numA = parseInt(a)
  const numB = parseInt(b)

  if (numA > numB) {
    return 'greater'
  } else if (numB > numA) {
    return 'less'
  } else {
    return 'equal'
  }
}
console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));