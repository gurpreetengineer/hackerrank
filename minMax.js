/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function reductionToMinimum(generalArray) {
  let maximumElementsArray = JSON.parse(JSON.stringify(generalArray));
  let minima = 1000000;

  for (let i = 0; i < generalArray.length; i++) {
    if (generalArray[i] < minima) 
      minima = generalArray[i];
  }
  let founded = maximumElementsArray.indexOf(minima);

  maximumElementsArray.splice(founded, 1);

  return maximumElementsArray;
}

function addArray(filteredArray) {
  console.log(filteredArray);
  let result = 0;
  for(element of filteredArray) 
    result += element;
  return result;
}

function reductionToMaximum(generalArray) {
  let minimumElementsArray = generalArray;
  let maxima = 0;

  for (let i = 0; i < generalArray.length; i++) {
    if (generalArray[i] > maxima)
      maxima = generalArray[i];
  }
  let founded = minimumElementsArray.indexOf(maxima);

  minimumElementsArray.splice(founded, 1);

  return minimumElementsArray;
}


function miniMaxSum(arr) {
  console.log('arrrrr', arr)
  // Write your code here
  let sumOfMinElements = addArray(reductionToMinimum(arr));
  console.log('arrrr2222r', arr)

  let sumOfMaxElements = addArray(reductionToMaximum(arr));

  console.log('sumOfMinElements', sumOfMinElements);
  console.log('sumOfMaxElements', sumOfMaxElements);
}
let arr = [140638725, 436257910, 953274816, 734065819, 362748590];
miniMaxSum(arr);