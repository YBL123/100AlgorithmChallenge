export function sumOfTwo(a: number[], b: number[], v: number): boolean {
  console.log(a);
  console.log(b);
  console.log(v);

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    for (let j = 0; j < b.length; j++) {
      console.log(b[j]);
      console.log(a[i] + b[j]);
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
