export function factorializeANumber(num: number): number {
  console.log(num)
  let numArr = []

  for (let i = 1; i <= num; i++) {
    numArr.push(i)
  }
  
  console.log(numArr)

  return numArr.reduce((curr, acc) => curr * acc)

}

console.log(factorializeANumber(5));  
console.log(factorializeANumber(10));