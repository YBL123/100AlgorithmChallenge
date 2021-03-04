export function maxMultiple(divisor: number, bound: number): number {
  console.log(bound)
  console.log(bound % divisor)
  console.log(bound - (bound % divisor))
  return bound - (bound % divisor)

}

console.log(maxMultiple(3,10));