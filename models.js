const Sequelize = require('sequelize');
//const bcrypt = require('bcrypt'); tuesday


const pawDb = new Sequelize({
  database: 'pawDb',
  dialect: 'postgres'
})

const AuthUser = pawDb.define('authuser', {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  module.exports = {
    pawDb,
    AuthUser
  }