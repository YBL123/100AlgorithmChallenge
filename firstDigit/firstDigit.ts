import { parse } from "@babel/core"

export function firstDigit(inputString: string): string {
  console.log(inputString)
  const strArr = inputString.split('')
  console.log(strArr)
  for (let i = 0; i < strArr.length; i++) {
    console.log(parseInt(strArr[i]))
    if (parseInt(strArr[i]) || parseInt(strArr[i]) === 0) {
      return strArr[i]
    }
  }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
