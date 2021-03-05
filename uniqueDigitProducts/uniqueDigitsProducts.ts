export function uniqueDigitProducts(a: number[]): number {
  console.log(a)

  console.log(a[2])

  let prodArr = []

  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    const x = a[i].toString().split('')
    console.log(x)
    for (let j = 0; j < x.length; j++) {
      console.log(x.length)
      if (x.length > 1) {
        console.log(x)
        const sum = x.reduce((acc, curr ) => acc * curr)
        prodArr.push(sum)
        console.log(prodArr)
      }
  }
}

  const res = [...new Set(prodArr)]
  console.log(res)
  return res.length

}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));



// Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.

// **Example**
// -   For a = [2, 8, 121, 42, 222, 23], the output should be
// uniqueDigitProducts(a) = 3.

// Here are the products of the array's elements:

// 2: product(2) = 2;
// 8: product(8) = 8;
// 121: product(121) = 1 * 2 * 1 = 2;
// 42: product(42) = 4 * 2 = 8;
// 222: product(222) = 2 * 2 * 2 = 8;
// 23: product(23) = 2 * 3 = 6.
// As you can see, there are only 3 different products: 2, 6 and 8.