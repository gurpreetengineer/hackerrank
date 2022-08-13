let a =[1,2,[5,6,[7,8,9],10,11,[112,113,[120,132,[140]]]],12,13,[3,4]]
let final_array = [];

// put habit of thinking functions in descrete mathematics and limits
function flat_the_array(input_array){
  for(let element of input_array) {
    if (Array.isArray(element)){
      flat_the_array(element)
    } else {
      final_array.push(element)
    }
  }
  return final_array
}


flatted_array = flat_the_array(a)
console.log(flatted_array)