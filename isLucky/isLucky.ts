import { visitNode } from "typescript"

export function isLucky(n: number): boolean {
  let arr = n.toString().split('')

  const midPointIndex = arr.length / 2

  const firstHalf = arr.slice(0, midPointIndex)
  const first = firstHalf.reduce((acc, curr) => parseInt(acc) + parseInt(curr))

  const secondHalf = arr.slice(midPointIndex, arr.length)
  const second = secondHalf.reduce((acc, curr) => parseInt(acc) + parseInt(curr))

  return first === second

}

console.log(isLucky(1230));
console.log(isLucky(239017));