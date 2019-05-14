import React from 'react';
import AddPet from '../AddPet/AddPet';
import Home from '../Home/Home';
import PetList from '../PetList/PetList'
import { Route} from 'react-router-dom'

const Main = ({}) => (
  <div>
    <Route 
      exact path='/' 
      render={() => <Home />} />
    <Route 
      path='/pet-list'
      render={() => <PetList />} />
    <Route
      path='/add-pet'
      render={() => <AddPet />} />
  </div>
);

export default Main;
