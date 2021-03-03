export function longestDigitsPrefix(inputString: string): string {

  const arr = inputString.split('')
  let resArr = []

  for (let i = 0; i < arr.length; i++) {
    const x = parseInt(arr[i])
    if (!x) {
      var endPoint = arr.indexOf(arr[i])
      console.log(endPoint)
    }
    resArr.push(...arr.splice(0, endPoint))
  }
  
    return resArr.join('')

}

console.log(longestDigitsPrefix('123aa1'));

