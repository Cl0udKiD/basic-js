const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,options){
  var repeatTimes = 1
  var separator = '+'
  var addition = ''
  var additionRepeatTimes = 1
  var additionSeparator = '|'
  var result = ''

  if (options.hasOwnProperty('repeatTimes')) repeatTimes = options.repeatTimes
  if (options.hasOwnProperty('separator')) separator = options.separator
  if (options.hasOwnProperty('addition')) addition = options.addition
  if (options.hasOwnProperty('additionRepeatTimes')) additionRepeatTimes = options.additionRepeatTimes
  if (options.hasOwnProperty('additionSeparator')) additionSeparator = options.additionSeparator


  for (let r = 0; r < repeatTimes;++r){
    result += str
    if (additionRepeatTimes>0){
      for (let i = 0;i<additionRepeatTimes;++i){
        result += addition
        if (i !== (additionRepeatTimes-1)) result += additionSeparator
      }
    }
    if (r!==repeatTimes-1) result += separator
  }
  return result
}

module.exports = {
  repeater
};
