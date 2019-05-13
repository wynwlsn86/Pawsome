const { AuthUser, Pet, Visit, Adopter } = require('../models.js')
const pets = require('../data')

//const bcrypt = require('bcrypt') tuesday

const seedDb = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const creator = await Pet.bulkCreate(pets)
  } catch (err) { 
    console.log('ohno ' + err.message);
  } finally {
    await process.exit();
  }
}




seedDb()


