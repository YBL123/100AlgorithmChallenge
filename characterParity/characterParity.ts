export function characterParity(symbol: string): string {
  // console.log(symbol)
  if (isNaN(parseInt(symbol))) {
    return 'not a digit'
  } else if (parseInt(symbol) % 2 !== 0) {
    return 'odd'
  } else if (parseInt(symbol) % 2 === 0) {
    return 'even'
  }

}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
