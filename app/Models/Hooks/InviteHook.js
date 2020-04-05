'use strict'
const User = use('App/Models/User')
const Kue = use('Kue')
const Jobs = use('App/Jobs/InvitationEmail')

const InviteHook = exports = module.exports = {}

InviteHook.sendInvitationEMail = async (invite) => {
  const { email } = invite
  const invited = await User.findBy('email', email)

  if (invited) {
    await invited.teams().attach(invite.team_id)
  } else {
    const user = await invite.user().fetch()
    const team = await invite.team().fetch()

    Kue.dispatch(Jobs.key, { user, team, email }, { attempts: 3 })
  }
}
