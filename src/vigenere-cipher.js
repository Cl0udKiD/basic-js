const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
  reverse = false
  constructor(...args) {
    if (args[0]==false) this.reverse = true
  }
  
  encrypt(...args) {
    if (args.length<2||typeof args[0] != 'string'||typeof args[1] != 'string') throw new Error('Incorrect arguments!')
    var result = ''
    var str = args[0].toUpperCase()
    var key = args[1].toUpperCase()
    str = str.toUpperCase()
    key = key.toUpperCase()
    var key_fin = ''
    for (let i in str){
      key_fin += key[i%key.length]
    }
    var j = 0
    for (let i = 0; i < str.length; ++i){
      if (this.abc.includes(str[i])){
        result += this.abc[(this.abc.indexOf(str[i])+this.abc.indexOf(key_fin[j]))%26]
        j++
      }else{
        result += str[i]
      }
    }
    if (this.reverse){
      var arr = result.split('')
      arr = arr.reverse()
      result = arr.join('')
    }
    return result
  }
  
  decrypt(...args) {
    if (args.length<2||typeof args[0] != 'string'||typeof args[1] != 'string') throw new Error('Incorrect arguments!')
    var result = ''
    var str = args[0].toUpperCase()
    var key = args[1].toUpperCase()
    var key_fin = ''
    for (let i in str){
      key_fin += key[i%key.length]
    }
    var j = 0
    for (let i = 0; i < str.length; ++i){
      if (this.abc.includes(str[i])){
        result += this.abc[(this.abc.indexOf(str[i])-this.abc.indexOf(key_fin[j])+26)%26]
        j++
      }else{
        result += str[i]
      }
    }
    if (this.reverse){
      var arr = result.split('')
      arr = arr.reverse()
      result = arr.join('')
    }
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
