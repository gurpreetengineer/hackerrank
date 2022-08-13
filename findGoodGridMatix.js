let gridMatrix = [
  "BGBBGB",
  "GGGGGG",
  "BGBBGB",
  "GGGGGG",
  "BGBBGB",
  "BGBBGB"
]


const findGoodGridMatrix = (inputMatrix) => {
  let uniqueAreas = new Set([1]);
  let figureArea = 1;
  let finalAreaOfPerfectPlus = 1;
  let rowLength = inputMatrix.length - 1;
  let colLength = inputMatrix[0].length - 1;

  let tempI = 1;
  let kLimit = 0;
  if (inputMatrix.length < 2) return finalAreaOfPerfectPlus;

  for (let i = 1; i < rowLength && i >= tempI; i++) {
    console.log('tempI', tempI);

    if (i < tempI) {
      continue;
    }
    for (let j = 1; j < colLength; j++) {
      figureArea = 1;
      kLimit = i === j ? i : (i < j ? i : j);
      console.log('kLimit', kLimit, figureArea);
      console.log('inputMatrix', inputMatrix);
      for (let k = 1; k <= kLimit; k++) {
        console.log('i', i);
        console.log('j', j);
        console.log('k', k);
        console.log('11>>>>inputMatrix[i][j] === G', inputMatrix[i][j] === 'G', inputMatrix[i][j]);
        console.log('22>>>>inputMatrix[i - k][j] === G', inputMatrix[i - k][j] === 'G', inputMatrix[i - k][j]);
        console.log('33>>>>inputMatrix[i + k][j] === G', inputMatrix[i + k][j] === 'G', inputMatrix[i + k][j]);
        console.log('44>>>>inputMatrix[i][j - k] === G', inputMatrix[i][j - k] === 'G', inputMatrix[i][j - k]);
        console.log('55>>>>inputMatrix[i][j + k] === G', inputMatrix[i][j + k] === 'G', inputMatrix[i][j + k]);
        if (inputMatrix[i][j] === 'B' && inputMatrix[i - k][j] === 'B' && inputMatrix[i + k][j] === 'B' && inputMatrix[i][j - k] === 'B' && inputMatrix[i][j + k] === 'B') {
          tempI = i + 2;
          continue;
        }
        if (inputMatrix[i][j] === 'G' && inputMatrix[i - k][j] === 'G' && inputMatrix[i + k][j] === 'G' && inputMatrix[i][j - k] === 'G' && inputMatrix[i][j + k] === 'G') {
          tempI = i + 2;
          j++;
          figureArea += 4;
          console.log('--------------inside loop figureArea', figureArea);
        } else break;
      }
      console.log('uniqueAreas.has(figureArea)', uniqueAreas.has(figureArea));
      console.log('finalAreaOfPerfectPlus === figureArea', finalAreaOfPerfectPlus, figureArea);
      // if (!uniqueAreas.has(figureArea) && !(finalAreaOfPerfectPlus === figureArea)) {
      //   uniqueAreas.add(figureArea);
      // }
      finalAreaOfPerfectPlus *= figureArea;
      console.log('after loops finalAreaOfPerfectPlus', finalAreaOfPerfectPlus);
      // break;
    }
    console.log('+++++++=========++++++++');
  }

  return finalAreaOfPerfectPlus;
}

const result = findGoodGridMatrix(gridMatrix);
console.log('result', result);
