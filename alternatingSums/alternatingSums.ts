export function alternatingSums(a: number[]): number[] {
  console.log(a)

  let teamOne = a.filter((el, i ) => i % 2 !== 0).reduce((acc, curr) => acc + curr)
  console.log(teamOne)
  let teamTwo = a.filter((el, i) => i % 2 === 0).reduce((acc, curr) => acc + curr)
  console.log(teamTwo)

  return [teamOne, teamTwo]


}

console.log(alternatingSums([50, 60, 60, 45, 70]))