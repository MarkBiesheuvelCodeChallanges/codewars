/* eslint-disable no-unused-vars */
const crypto = require('crypto')

const passHash = string => crypto.createHash('md5').update(string).digest('hex')
