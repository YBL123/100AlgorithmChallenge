export function isCaseInsensitivePalindrome(inputString: string): boolean {
  console.log(inputString)

  let reverseStr = inputString.split('').reverse().join('').toLowerCase()
  console.log(reverseStr)

  return inputString.toLowerCase() === reverseStr

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));