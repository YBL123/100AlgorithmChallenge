export function palindromeRearranging(inputString: string): boolean {
  console.log(inputString);
  let inputArr = inputString.split('')

  let permArr = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      permArr.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  console.log(permArr)

  for (let i = 0; i < permArr.length; i++) {
  console.log(permArr[i].join(''))
  const midPoint = permArr[i].length / 2
  console.log(midPoint)
  const first = permArr[i].slice(0, midPoint).join('')
  console.log(first)
  const second = permArr[i].slice(midPoint, permArr[i].length).reverse().join('')
  console.log(second)

  if (first === second) {
    return true
  }
}

}
console.log(palindromeRearranging('aabb'));


// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.


// for (let j = 0; j < permArr[i].length; j++) {
//   console.log(j)
//   const midPoint = permArr[i].length / 2
//   console.log(midPoint)
//   }