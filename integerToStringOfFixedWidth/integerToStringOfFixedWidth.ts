export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  console.log(number);
  console.log(width);

  const numArr = number.toString().split('');
  console.log(numArr);

  let diff = Math.abs(numArr.length - width);
  console.log(diff)

  for (let i = 0; i < width; i++) {
    if (numArr.length !== width && numArr.length > width) {
      numArr.splice(0, diff);
      console.log(numArr);
    } else if (numArr.length < width) {
      console.log(numArr);
      numArr.unshift('0');
    }
  }
  console.log(numArr)
  return numArr.join('');
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
