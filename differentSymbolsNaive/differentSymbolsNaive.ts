export function differentSymbolsNaive(s: string): number {
  console.log(s)

  let sToArr = s.split('').sort()
  let x = [...new Set(sToArr)]

  console.log(x)

  return x.length

  

}

console.log(differentSymbolsNaive('cabca'));
