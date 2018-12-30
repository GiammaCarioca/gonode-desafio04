'use strict'

const Antl = use('Antl')

class Password {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      password: 'required',
      newPassword: 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Password
