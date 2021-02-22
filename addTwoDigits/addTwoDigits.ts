export function addTwoDigits(n: any): number {
  let str = n.toString()
  let strArr = str.split('')
  let res = strArr.reduce((acc: string, curr: string) => parseInt(acc) + parseInt(curr))
  return res
}

console.log(addTwoDigits(29));