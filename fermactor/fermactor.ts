export function fermactor(n: number): number[] {
  for (let i = 0; i < n; i++) {
    for(let j = 1; j < n; j++) {
      const total = Math.pow(i, 2) - Math.pow(j, 2)
      // can also do i ** 2 - j ** 2

      if (total === n) {
        return [i, j]
      }
    }
  }

}

console.log(fermactor(15));