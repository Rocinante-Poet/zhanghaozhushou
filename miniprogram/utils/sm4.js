const sm4 = require('../libs/sm-crypto/index')

export default {
  encrypt(data, key) { 
    // console.log('sm4加密 data:  ' + data + ' key: '+ key)
    if (!data || !key) return ''
    return sm4.encrypt(data, key)
  },
  decrypt(data, key) {
    // console.log('sm4解密 data:  ' + data + ' key: '+ key)
    if (!data || !key) return ''
    return sm4.decrypt(data, key)
  },
}