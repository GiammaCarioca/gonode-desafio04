'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request, response, view }) {
    const events = await Event.query()
      .with('user')
      .fetch()

    return events
  }

  async store ({ request, response, auth }) {
    const data = request.only(['title', 'location', 'dt'])

    const event = await Event.create({ ...data, user_id: auth.user.id })

    return event
  }

  async show ({ params }) {
    const event = await Event.findOrFail(params.id)

    await event.load('user')

    return event
  }

  async update ({ params, request }) {
    const event = await Event.findOrFail(params.id)
    const data = request.only(['title', 'location', 'dt'])

    event.merge(data)

    await event.save()

    return event
  }

  async destroy ({ params }) {
    const event = await Event.findOrFail(params.id)

    await event.delete()
  }
}

module.exports = EventController
