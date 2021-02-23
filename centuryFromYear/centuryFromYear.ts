export function centuryFromYear(year: number): number {
console.log(year)

let res = year / 100
console.log(res)

if (year % 100 === 0 ) {
  console.log(res)
  return res
}

console.log(Math.floor(year / 100 + 1))
return Math.floor(year / 100) + 1

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));