const Sequelize = require('sequelize');


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

  const Pet = pawDb.define('pets', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    species: {
      type: Sequelize.STRING,
      allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    medical: {
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

   const Visit = pawDb.define('visits', {
       adoption_date: {
           type:Sequelize.DATE,
           allowNull: true
       },
       visit_date: {
           type: Sequelize.DATE,
           allowNull: false
       },
       pass: {
           type: Sequelize.BOOLEAN,
           allowNull: false
       },
       comments: {
           type: Sequelize.STRING,
           allowNull: true
       } 
   })

   const Adopter = pawDb.define('adopters', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vlast_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allownull: false
    },
    zip: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    family_size_int: {
        type: Sequelize.INTEGER,
        allownull: true
    },
    house_size_sqft: {
        type: Sequelize.INTEGER,
        allownull: true
    },
    animal_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
})


  module.exports = {
    pawDb,
    AuthUser,
    Pet,
    Visit,
    Adopter
  }