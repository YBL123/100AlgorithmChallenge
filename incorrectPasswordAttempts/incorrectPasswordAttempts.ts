export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
  console.log(passcode)
  console.log(attempts)
  // loop
  // count -> to 10 consecutive if does not include passcode
  // if it reaches 10 conescutive -> true
  // if not false

  let count = 0

  for (let i = 0; i < attempts.length; i++) {
    console.log(attempts[i])
    if (attempts[i] !== passcode) {
      count++
    }
  }
  return count = 10 ? true : false
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));