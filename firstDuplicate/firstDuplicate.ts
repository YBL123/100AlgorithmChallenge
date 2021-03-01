export function firstDuplicate(a: number[]): number {
  let found = {};

  for (let i = 0; i < a.length; i++) {
    if (found[a[i]] !== undefined) return a[i];
    else {
      found[a[i]] = i;
    }
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
