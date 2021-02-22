export function alphabeticShift(inputString: string): string {
  let arr = inputString.split('')
  let nextChar = arr.map(char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1) )
  console.log(nextChar)
  return nextChar.join('')

}

console.log(alphabeticShift('crazy'));