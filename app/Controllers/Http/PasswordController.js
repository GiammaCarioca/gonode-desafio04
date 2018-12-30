'use strict'

const Hash = use('Hash')

class PasswordController {
  async update ({ request, response, auth }) {
    try {
      const { password, newPassword, confirmNewPassword } = request.all()

      const user = await auth.getUser()
      const isSame = await Hash.verify(password, user.password)
      const isChanged = await Hash.verify(newPassword, user.password)

      if (isSame) {
        if (!isChanged) {
          if (newPassword === confirmNewPassword) {
            user.password = newPassword
            await user.save()
            return 'Password changed successfully.'
          }

          return 'Please, confirm the new password again.'
        }

        return 'Oops, you forgot to change the password.'
      }

      return 'Make sure to provide a valid password.'
    } catch (error) {
      response.send('Missing or invalid api token')
    }
  }
}

module.exports = PasswordController
