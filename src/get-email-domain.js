const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  var index = 0
  for (let i = str.length-1; i > 0; --i){
    if (str[i]=='@'){
      index = i
      break
    }
  }
  return str.substr(index+1)
}

module.exports = {
  getEmailDomain
};
