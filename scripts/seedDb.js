const { AuthUser, Pet, Visit, Adopter } = require('../models.js')
const pets = require('../data')

//const bcrypt = require('bcrypt') tuesday




// WAYNE or TARA
// once decided upon - delete my const = fake.. variables. these are to ensure seed.js populates the tables with expected values.

const seedDb = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const creator = await Pet.bulkCreate(pets)
    const fakeUserCharles = await AuthUser.create({
      name: "Mister Charles",
      email: "charleskorpics@gmail.com",
      password: 'ohwowitsapasswordnobodywilleverguessit',
    });
    const fakeVolunteerInstance = await Visit.create({
      name: "lil bill",
      email: "bill@billybill.com",
      phone: '911-311-ghostbusters'
    });
    const fakeVisitInstance = await Visit.create({
      visit_date: "01/25/1994",
      pass: true
    });
    const fakeAdopterInstance = await Adopter.create({
      first_name: 'hey',
      last_name: 'itsme',
      dob:'12345',
      license: '1234556789',
      rent_or_own: 'rent',
      other_pets: 'yes',
      children:'no',
      allergies:'nope',
      vet:'no sir',
      phone: '8452649299',
      email:'heyhey@heyhey.com',
      address: '123 big street',
      city:'nyc',
      state: 'ny',
      zip: 12345,
      house_size_sqft: '1234'
    })

  } catch (e) { 
    console.log('CHECK IT' + e);
  } finally {
    await process.exit();
  }
}




seedDb()


