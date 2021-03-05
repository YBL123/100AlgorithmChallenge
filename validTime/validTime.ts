export function validTime(time: string): boolean {

  return Number(time.split(':')[0]) < 24 && Number(time.split(':')[1]) < 60

}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));



// given string is a correct time representation of the 24-hour clock.