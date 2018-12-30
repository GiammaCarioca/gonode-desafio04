'use strict'

const Route = use('Route')

/**
 * User routes
 */
Route.post('users', 'UserController.store')
Route.put('users', 'UserController.update')

/**
 * Auth routes
 */
Route.post('auth', 'AuthController.store')
Route.put('passwords', 'PasswordController.update')
