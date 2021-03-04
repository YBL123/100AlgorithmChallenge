export function sortByHeight(a: number[]): number[] {

  const resArr = a.filter((el) => {
    if (el !== -1) {
      return el;
    }
  }).sort((num1, num2) => num1 - num2)

  let indexVal = 0 // to reference original indexes

  for(let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = resArr[indexVal] //overwrite
      indexVal++ //get in correct index order
    }
  }

  return a
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
