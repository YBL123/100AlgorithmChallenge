export function firstNotRepeatingCharacter(s: string): string {
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return '_';

}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
