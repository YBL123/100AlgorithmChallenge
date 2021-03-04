export function properNounCorrection(noun: string): string {
  const lower = noun.toLowerCase()
  const upper = lower[0].toUpperCase()

  return lower.replace(lower[0], upper)
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));