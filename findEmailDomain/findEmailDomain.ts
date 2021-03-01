export function findEmailDomain(address: string): string {
  console.log(address)
  const last = address.lastIndexOf('@')
  return address.slice(last + 1, address.length)
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
