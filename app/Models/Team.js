"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Team extends Model {
  user() {
    this.belongsToMany("App/Models/User").pivotModel("App/Models/UserTeam");
  }
}

module.exports = Team;
