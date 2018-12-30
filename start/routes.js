'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User/Create')
Route.put('users', 'UserController.update').validator('User/Update')

Route.post('auth', 'AuthController.store').validator('Auth')
Route.put('passwords', 'PasswordController.update').validator('Password')

Route.group(() => {
  Route.resource('events', 'EventController')
    .apiOnly()
    .validator(new Map([[['events.store', 'events.update'], ['Event']]]))
}).middleware(['auth'])
