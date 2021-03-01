export function domainType(domains: string[]): string[] {
  console.log(domains)

  const res = domains.map(el => {
    if (el.includes('.org')) {
      return 'organization'
    } else if (el.includes('.com')) {
      return 'commercial'
    } else if (el.includes('.net')) {
      return 'network'
    } else if (el.includes('.info')) {
      return 'information'
    }
  })

  return res

}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));