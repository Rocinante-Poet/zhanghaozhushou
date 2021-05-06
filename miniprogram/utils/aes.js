const CryptoJS = require('../libs/crypto-js/index')

export default {
  encrypt(data, key) {
    // console.log('sm4加密 data: ' + data + ' key: '+ key)
    if (!key) {
      console.log('key is none')
      return
    }
    const encrypted = CryptoJS.AES.encrypt(data, key)
    return encrypted.toString()
  },
  decrypt(data, key) {
    // console.log('aes解密 data: ' + data + ' key: '+ key)
    if (!key) {
      console.log('key is none')
      return
    }
    const decrypted = CryptoJS.AES.decrypt(data, key)
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}