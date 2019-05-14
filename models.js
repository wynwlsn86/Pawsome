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
        type: Sequelize.STRING,
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
        type:Sequelize.STRING,
        allowNull: true
       },
    visit_date: {
        type: Sequelize.STRING,
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
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob:{
        type: Sequelize.STRING,
        allowNull: false
    },
    license: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rent_or_own:{
        type: Sequelize.STRING,
        allowNull: false
    },
    other_pets:{
        type: Sequelize.STRING,
        allowNull: false
    },
    children:{
        type: Sequelize.STRING,
        allowNull: false
    },
    allergies:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vet:{
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
    house_size_sqft: {
        type: Sequelize.STRING,
        allownull: false
    }
})


Pet.hasMany(Visit, {
    through: 'pets_to_visits_xref',
    foreignKey: animal_id});
Visit.belongsTo(Pet);


Adopter.hasMany(Pet, {
    through: 'adopters_to_pets',
    foreignKey: adopter_id})
Pet.belongsTo(Adopter);





  module.exports = {
    pawDb,
    AuthUser,
    Pet,
    Visit,
    Adopter
  }