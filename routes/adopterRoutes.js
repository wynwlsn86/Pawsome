const express = require('express');
const adopterRouter = express.Router();

const { Adopter, Pet } = require('../models');


// represents localhost:PORT/adopters/

//get all those adopters yeah
adopterRouter.get('/', async (req, res) => {
  try {
    const allAdopters = await Adopter.findAll();
    res.send(allAdopters);
  } catch (e) {
    console.log(e.message);
  }
});


// post new adopter
adopterRouter.post('/', async (req, res) => {

  try {
    const postedAdopter = await Adopter.create(req.body);
    const petId = parseInt(req.body.animal_id)
    const petFind = await Pet.findByPk(petId)
    await postedAdopter.addPet(petFind)
    res.send(postedAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//find one adopter
adopterRouter.get('/:id', async (req, res) => {
  try {
    const leAdopter = await Adopter.findByPk(req.params.id);
    res.send(leAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing adopters
adopterRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedAdopt = await Adopter.findByPk(id);
    if (grabbedAdopt) await grabbedAdopt.update(req.body);
    res.json({
      grabbedAdopt
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

// delete particular adopter
adopterRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Adopter.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { adopterRouter };