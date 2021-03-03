export function lateRide(n: number): number {
  const res = n / 60
  return Math.ceil(res)

}

console.log(lateRide(240));
console.log(lateRide(808));
