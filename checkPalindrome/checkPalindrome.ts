export function checkPalindrome(inputString: string): boolean {
  // console.log(inputString)
  const reverseStr = inputString.split('').reverse().join('').toLowerCase()
  // console.log(reverseStr)
  return inputString.toLowerCase() === reverseStr 

}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
