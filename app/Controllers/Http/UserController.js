'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    const temasQuery = Invite.query().where('email', email)
    const teams = await temasQuery.pluck('team_id')

    if (teams.length === 0) {
      return response.status(401).send({ message: 'You´re not invited to any team' })
    }
  }
}

module.exports = UserController
