import AddPet from '../AddPet/AddPet';
import Home from '../Home/Home';
import PetList from '../PetList/PetList'
import Volunteers from '../Volunteers/Volunteers'
import { Route} from 'react-router-dom'
import React, { Component } from 'react';
import { getAllPets } from '../../services/petsApi';
import Login from '../Login/Login';
import AllPets from '../AllPets/AllPets'


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
   console.log(this.state.allPets)
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
          render={() => <AllPets
          allPets={this.state.allPets}
        />} />
         <Route
           path='/volunteers'
           render={() => <Volunteers />} />
        <Route
          path='/add-pet'
          render={() => <AddPet
          authenticated={this.props.authenticated}
          />} />
        <Route
          path='/login'

          render={() => <Login
            authenticated={this.props.authenticated}
            handleLogin={this.props.handleLogin}
            username={this.props.username}
            password={this.props.password}
            handleChange={this.props.handleChange}
            />} />

      </div>
    );
  }
}

export default Main;
