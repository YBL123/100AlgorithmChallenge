export function depositProfit(deposit: number, rate: number, threshold: number): number {
  console.log(deposit)
  console.log(rate)
  console.log(threshold)

  let year = 0
  let dep = deposit

  while (dep < threshold) {
    dep = dep * (rate / 100 + 1) 
    year++
  }
  return year

}

console.log(depositProfit(100, 20, 170))