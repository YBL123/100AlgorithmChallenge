export function sumAllPrimes(num: number): number {
  console.log(num)

  let sumArr = []

  for (let i = 0; i <= num; i++) {
    if (isPrime(i) {
      console.log(i)
      sumArr.push(i)
    }
  }
  console.log(sumArr)

  return sumArr.reduce((curr, acc) => curr + acc)
}


const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));


// A prime number is defined as a number greater than one and having only two divisors, one and itself. 
// For example, 2 is a prime number because it's only divisible by one and two.
