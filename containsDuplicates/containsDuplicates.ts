export function containsDuplicates(a: number[]): boolean {
  // console.log(a)

  const sortedA = a.sort((a, b) => a - b)
  // console.log(sortedA)

  for (let i = 0; i < sortedA.length; i++) {
    let x = sortedA[i] === sortedA[i + 1]
    return x
  }

  // alternate
  // return [...new Set(a)].length !== a.length

  // alternate 2
  // return a.sort((a, b) => a -b).some((val, index) => val === a[index + 1])
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
