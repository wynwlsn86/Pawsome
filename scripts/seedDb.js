const { AuthUser, Pet, Visit, Adopter } = require('../models.js')
const pets = require('../data')

//const bcrypt = require('bcrypt') tuesday

const seedDb = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const creator = await Pet.bulkCreate(pets)
    const fakeUserCharles = await AuthUser.create({
      name: "Mister Charles",
      email: "charleskorpics@gmail.com",
      password: 'ohwowitsapasswordnobodywilleverguessit',
    });
  } catch (e) { 
    console.log('CHECK IT' + e);
  } finally {
    await process.exit();
  }
}




seedDb()


