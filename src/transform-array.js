const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr_orig) {
  var i = 0
  if(!Array.isArray(arr_orig))throw new Error("'arr' parameter must be an instance of the Array!");
  var arr = []
  for (let i in arr_orig)
    arr.push(arr_orig[i])
  while (i<arr.length){
    switch(arr[i]){
      case '--discard-prev': 
        if(i==0){arr.splice(0,1)}else{arr.splice(i-1,2)}
        break
      case '--discard-next': 
        if(arr[i+2]=='--double-prev'||arr[i+2]=='--discard-prev'){arr.splice(i,3)} else{arr.splice(i,2)}
        break
      case '--double-prev': 
        if(i==0){arr.splice(0,1)}else{arr.splice(i,1,arr[i-1])}
        break
      case '--double-next': 
        if(i==arr.length-1){arr.splice(i,1)}else{arr.splice(i,1,arr[i+1])}
        break
    }
    ++i
  }
  return arr
}

module.exports = {
  transform
};
