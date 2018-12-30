'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.put('users', 'UserController.update')

Route.post('auth', 'AuthController.store')
Route.put('passwords', 'PasswordController.update')

Route.group(() => {
  Route.resource('events', 'EventController').apiOnly()
}).middleware(['auth'])
