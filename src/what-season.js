const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(...args) {
  if (args.length==0) return 'Unable to determine the time of year!'
  date = args[0]
  if (!(typeof date.getMonth === 'function')) throw new Error('Invalid date!')
  var month = date.getMonth()+1
  var result = ''
  switch (month){
    case 1: 
      result = 'winter'
      break
    case 2: 
      result = 'winter'
      break
    case 3: 
      result = 'spring' 
      break
    case 4: 
      result = 'spring'
      break
    case 5: 
      result = 'spring'
      break
    case 6: 
      result = 'summer'
      break
    case 7: 
      result = 'summer'
      break
    case 8: 
      result = 'summer'
      break
    case 9: 
      result = 'fall'
      break
    case 10: 
      result = 'fall'
      break
    case 11: 
      result = 'fall'
      break
    case 12: 
      result = 'winter'
      break
  }
  return result
}

module.exports = {
  getSeason
};
