const express = require('express');
const volRouter = express.Router();

const { Volunteer } = require('../models');

// represents localhost:PORT/volunteer/

//get all those vols yeah
volRouter.get('/', async (req, res) => {
  try {
    const allVolunteers = await Volunteer.findAll();
    res.send(allVolunteers);
  } catch (e) {
    console.log(e.message);
  }
});


// post new vol
volRouter.post('/', async (req, res) => {
  try {
    const postedVol = await Volunteer.create(req.body);
    res.send(postedVol);
  } catch (e) {
    console.log(e.message);
  }
});

//find one vol
volRouter.get('/:id', async (req, res) => {
  try {
    const leVol = await Volunteer.findByPk(req.params.id);
    res.send(leVol);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing vol
volRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedVol = await Volunteer.findByPk(id);
    if (grabbedVol) await grabbedVol.update(req.body);
    res.json({
      grabbedVol
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })
// delete particular vol
volRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Volunteer.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { volRouter };