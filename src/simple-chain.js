const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return arr.length
  },
  addLink(value) {
    this.arr.push('( '+value+' )')
    return this
  },
  removeLink(i) {
    if (i<1||i>this.arr.length||typeof i != 'number'){
      this.arr = []
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(i-1,1)
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    var arr_fin = this.arr
    this.arr = []
    return arr_fin.join('~~')
  }
};

module.exports = {
  chainMaker
};
