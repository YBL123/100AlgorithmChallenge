export function companyBotStrategy(trainingData: number[][]): number {
  console.log(trainingData)
  let newArr = []

  for (let i=0; i < trainingData.length; i++) {
    if (trainingData[i][1] === 1) {
      newArr.push(trainingData[i][0])
    } 
  }
  return newArr.length > 0 ? newArr.reduce((acc, curr) => acc + curr) / newArr.length : 0

}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
