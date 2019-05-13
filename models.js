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

  const Pet = db.define('pets', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    species: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fixed: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
  })

  const Visit = db.define('pets', {
 
  })


  module.exports = {
    pawDb,
    AuthUser
  }