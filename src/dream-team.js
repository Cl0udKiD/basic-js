const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false
  var valid = []
  for (let i in arr){
    if (typeof arr[i]=='string') valid.push(arr[i].toUpperCase().replace(/\s/g, ''))
  }
  var result = ''
  valid = valid.sort()
  for (let i in valid) result+=valid[i][0]
  return result
}

module.exports = {
  createDreamTeam
};
