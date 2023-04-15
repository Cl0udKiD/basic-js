const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  var ones = []
  var sort = []
  for (let i in arr){
    if (arr[i]==-1){
      ones.push(arr[i])
    }else{
      ones.push(0)
      sort.push(arr[i])
    }
    
  }
  sort = sort.sort( (p, p2) => {return p - p2; });
  var n = 0
  for (let i in ones){
    if (ones[i]!==-1){
      ones[i]=sort[n]
      n++
    }
  }
  return ones
}

module.exports = {
  sortByHeight
};
