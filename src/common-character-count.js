const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  if (s1.length<s2.length){
    var temp = s2
    s2 = s1
    s1 = temp
  }
  var i = 0
  var n = 0
  while (i<s1.length){
    var j = 0
    while (j<s2.length){
      if (s1[i]==s2[j]){
        n++
        s1 = s1.substr(0, i) + s1.substr(i+1);
        s2 = s2.substr(0, j) + s2.substr(j+1);
        i--
      }
      j++
    }
    ++i
  }
  return n
}

module.exports = {
  getCommonCharacterCount
};
