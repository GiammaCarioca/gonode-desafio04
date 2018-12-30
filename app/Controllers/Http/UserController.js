'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, response, auth }) {
    try {
      const user = await auth.getUser()
      const username = request.input('username')

      if (!username) {
        return 'Please, enter your new username.'
      }

      if (username && username === user.username) {
        return 'This username already exists.'
      }

      if (username && username !== user.username) {
        user.username = username
        await user.save()
        return `Username changed successfully to ${username}.`
      }
    } catch (err) {
      response.send('Missing or invalid api token')
    }
  }
}

module.exports = UserController
