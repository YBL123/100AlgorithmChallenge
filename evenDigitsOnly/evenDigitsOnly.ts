export function evenDigitsOnly(n: number): boolean {
  const arr = n.toString().split('')
  console.log(arr)

  return arr.every(num => parseInt(num) % 2 === 0)

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));