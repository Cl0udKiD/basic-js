const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(...args) {
  if (args[0]==undefined) return false
  sample = args[0]
  if (typeof sample != 'string') return false
  if (isNaN(parseFloat(sample))) return false
  if (parseFloat(sample)<=0||parseFloat(sample)>15) return false
  return Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/parseFloat(sample)) / Math.log(2))

}

module.exports = {
  dateSample
};
