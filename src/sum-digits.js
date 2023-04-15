const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  q=0;
  s=n.toString();
  while (s.length>1){
    for(let i=0;i<s.length;++i){
      q+=Number(s[i]);
    }
    s=q.toString();
    q=0;
  }
  return Number(s);
}

module.exports = {
  getSumOfDigits
};
