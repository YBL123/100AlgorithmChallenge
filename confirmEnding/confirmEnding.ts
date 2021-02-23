export function confirmEnding(str: string, target: string) {
  console.log(str)
  console.log(target)

  const sliceStr = str.substr(target.length - 1)
  console.log(sliceStr)

  return sliceStr === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));