import { createBuilderStatusReporter } from "typescript";

export function addBorder(picture: string[]): string[] {
  const newArr = ["***", ...picture, "***"]

  return newArr.map(item => `*${item}*`)

  
}

console.log(addBorder(["abc", "ded"]));