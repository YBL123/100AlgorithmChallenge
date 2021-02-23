export function candies(n: number, m: number): number {
  console.log(m / n)
  let x = Math.floor(m / n)
  let res = x * n
  return res
}

console.log(candies(3, 10));