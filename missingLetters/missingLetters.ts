export function missingLetters(str: string): string {
  var missing = '';

  for (let i = 0; i < str.length; i++) {
    for (var j = str.charCodeAt(0); j <= str.charCodeAt(str.length - 1); j++) {
      if (str.charCodeAt(i) !== j) {
        missing = String.fromCharCode(j);
      }
    }
  }
  return missing;
}

console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
