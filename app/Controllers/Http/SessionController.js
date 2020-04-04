"use strict";

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.all();

    const tocken = await auth.attempt(email, password);

    return tocken;
  }
}

module.exports = SessionController;
