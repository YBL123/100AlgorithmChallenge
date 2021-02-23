export function chunkyMonkey(arr: any[], size: number): any[][] {
  console.log(arr)
  console.log(size)

  let newArr = []

  arr.forEach(ele => {
    const lastEle = newArr[newArr.length - 1]
    if (!lastEle || lastEle.length === size) {
      newArr.push([ele])
    } else {
      lastEle.push(ele)
    }
  });

  return newArr
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));