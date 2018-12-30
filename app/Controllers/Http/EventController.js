'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request, auth }) {
    try {
      const { page } = request.get()

      const { id } = await auth.getUser()
      const events = await Event.query()
        .where('user_id', id)
        .with('user')
        .orderBy('date', 'asc')
        .orderBy('time', 'asc')
        .paginate(page)

      return events
    } catch (err) {
      return err
    }
  }

  async store ({ request, response, auth }) {
    try {
      const data = request.only(['title', 'location', 'date', 'time'])
      const event = await Event.create({ ...data, user_id: auth.user.id })

      return event
    } catch (err) {
      return err
    }
  }

  async show ({ response, params, auth }) {
    try {
      const { id } = await auth.getUser()

      const event = await Event.findOrFail(params.id)

      if (event.user_id !== id) {
        return "You cannot see someone else's events."
      }
      await event.load('user')
      return event
    } catch (err) {
      return err
    }
  }

  async update ({ response, params, request, auth }) {
    try {
      const { id } = await auth.getUser()

      const event = await Event.findOrFail(params.id)
      const data = request.only(['title', 'location', 'date', 'time'])

      if (event.user_id !== id) {
        return "You cannot edit someone else's events."
      }
      event.merge(data)

      await event.save()

      return event
    } catch (err) {
      return err
    }
  }

  async destroy ({ params, auth }) {
    try {
      const { id } = await auth.getUser()

      const event = await Event.findOrFail(params.id)

      if (event.user_id !== id) {
        return "You cannot delete someone else's events."
      }
      await event.delete()
    } catch (err) {
      return err
    }
  }
}

module.exports = EventController
