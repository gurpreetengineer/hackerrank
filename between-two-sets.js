function getTotalX(a, b) {
  // Write your code here
  const min_of_b = Math.min(...b);
  const a_factors = [], common_factors = [];
  let is_a = false, is_b = false;
  let i = 2, j;
  const some_a = a.some(item => item === 0);
  const some_b = b.some(item => item === 0);
  const a_contains_one = a.some(item => item === 1);

  if(some_a || some_b) {
    return 1
  }
  if( a_contains_one) {
    i = 1
  }

  for (i; i <= min_of_b; i++) {
    for (j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        is_a = false
        break;
      }
      is_a = true
    }
    if (is_a) {
      a_factors.push(i)
    }
  }
  a_factors.map(a_unit => {
    for( let k =0; k < b.length; k ++) {
      if(b[k] % a_unit !== 0) {
        is_b = false;
        break
      }
      is_b = true
    }
    if (is_b) {
      common_factors.push(a_unit)
    }
  })
  return common_factors.length
}

const a = [2, 4]
// const a = [1]
const b = [16, 32, 96]
// const b = [100]
let res = getTotalX(a, b)
console.log('++++++++++', res)