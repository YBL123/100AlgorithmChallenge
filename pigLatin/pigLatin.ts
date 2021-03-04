export function pigLatin(str: string): string {
  const vowelsRegex = /[aeiou]/
  const letters = str.split('');

  if (vowelsRegex.test(str[0])) {
    return `${str}way`
  }

  while(true) {
    if (!vowelsRegex.test(letters[0])) {
      const firstCons = letters.splice(0, 1)[0]
      letters.push(firstCons)
    } else {
      break;
    }
  }

  return str = letters.join('') + 'ay'
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// -   split()
// -   test()
// -   join()
// -   push()
