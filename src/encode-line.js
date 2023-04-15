const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
var encodeLine = function(str){
  var cur = ''
  var c = 0
  var result = ''
  while (str.length!==0){
      c=0
      cur=str[0]
      while (str[c]==cur){
          c++
      }
      if (c>1){result += c + cur}else{result += cur}
      str=str.slice(c)
}
return result
}

module.exports = {
  encodeLine
};
