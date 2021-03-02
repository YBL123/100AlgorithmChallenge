export function isTandemRepeat(inputString: string): boolean {

  const mid = inputString.length / 2

  return inputString.slice(0, mid) === inputString.slice(mid, inputString.length)

}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
