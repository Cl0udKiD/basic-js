const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  str = n.toString()
  for (let i = 0; i<str.length;++i){
    if (parseInt(str[i])<parseInt(str[i+1])) {
      str = str.substr(0,i)+str.substr(i+1)
      break
    }else{
      if (i==str.length-1) str = str.substr(0,i)
    }
  }
  return parseInt(str)
}

module.exports = {
  deleteDigit
};
