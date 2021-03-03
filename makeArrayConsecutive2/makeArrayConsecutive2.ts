export function makeArrayConsecutive2(statues: number[]): number {

  let count = 0;

  const sorted = statues.sort();

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i] + 1) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
