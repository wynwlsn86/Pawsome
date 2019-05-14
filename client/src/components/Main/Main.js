import AddPet from '../AddPet/AddPet';
import Home from '../Home/Home';
import PetList from '../PetList/PetList'
import Volunteers from '../Volunteers/Volunteers'
import { Route} from 'react-router-dom'
import React, { Component } from 'react';
import { getAllPets } from '../../services/petsApi';
import LogIn from '../LogIn/Login'; //   ../uppercase/lowercase

class Main extends Component {
  constructor () {
    super();
    this.state = {
        allPets: []
    }
  }

  fetchAllPets = async () => {
   const allPets =  await getAllPets();
   console.log('fetch all pets complete');
    this.setState({allPets});
  }

  componentDidMount() {
    this.fetchAllPets();
  }
  render() {
    return (
      <div>
        <Route
          exact path='/'
          render={() => <Home />} />
        <Route
          path='/find-a-pet'
          render={() => <PetList
          allPets={this.state.allPets}
        />} />
         <Route
           path='/volunteers'
           render={() => <Volunteers />} />
        <Route
          path='/add-pet'
          render={() => <AddPet />} />
        <Route
          path='/login'
          render={() => <LogIn />} />
      </div>
    );
  }
}

export default Main;
