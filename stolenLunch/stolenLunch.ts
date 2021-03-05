import { createNoSubstitutionTemplateLiteral } from "typescript"

export function stolenLunch(note: string): string {
  console.log(note)
  const abc = 'abcdefghijklmnopqurstvwxyz'
  const abcArr = abc.split('')

  const noteArr = note.split('')
  console.log(noteArr)

  let secondArr = []
  let firstArr = []

  const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97
  const valAplha = (n) => String.fromCharCode(97 + n)


  for (let i = 0; i < noteArr.length; i++) {
        var numberReplace = noteArr.splice(0, noteArr.indexOf(':'))
        var letterReplace = noteArr.splice(noteArr.indexOf(':'), noteArr.length)
  }

  console.log(numberReplace)
  console.log(letterReplace)

  for (let i = 0; i < letterReplace.length; i++) {
    console.log(letterReplace[i])
    for (let j = 0; j < abcArr.length; j++) {
      if (letterReplace[i] === abc[j]) {
        console.log(alphaVal('a'))
        secondArr.push(alphaVal(letterReplace[i]))
      }
    }
  }

  console.log(secondArr.join(''))


    for (let i = 0; i < numberReplace.length; i++) {
      if (!isNaN(parseInt(numberReplace[i]))) {
        console.log(numberReplace[i])
        console.log(valAplha(parseInt(numberReplace[i])))
        firstArr.push(valAplha(parseInt(numberReplace[i])))
      } else {
        firstArr.push(numberReplace[i])
      }
    }

  
  console.log(firstArr)

  console.log(secondArr)

  return firstArr.join('') + ': ' + secondArr.join('')

}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));



// it looks like all the digits in it are replaced with letters and vice versa.
// Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.


// For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be
// stolenLunch(note) = "you'll never guess it: 2390".



// for (let j = 0; j < abcArr.length; j++) {
//   if (noteArr[i] === abcArr[j]) {