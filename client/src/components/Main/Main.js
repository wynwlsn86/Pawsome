import AddPet from '../AddPet/AddPet';
import Home from '../Home/Home';
import UpdatePet from '../UpdatePet/UpdatePet'
import Volunteers from '../Volunteers/Volunteers'
import { Route} from 'react-router-dom'
import React, { Component } from 'react';
import { getAllPets } from '../../services/petsApi';
import Login from '../Login/Login';
import AllPets from '../AllPets/AllPets'
import ContactUs from '../ContactUs/ContactUs'


class Main extends Component {
  constructor () {
    super();
    this.state = {
        allPets: [],
        selected: {},
        isSelected: false
    }
  }

  fetchAllPets = async () => {
   const allPets =  await getAllPets();
   console.log('fetch all pets complete');
   console.log(this.state.allPets)
    this.setState({allPets});
  }

  handleSelected = (e) => {
    e.preventDefault();
    const selected = this.state.allPets[e.target.value];
    console.log(selected);
    console.log(e.target.value, 'value')
    console.log(this.state.allPets)
    this.setState({selected});
    console.log(this.state)
    this.setState({isSelected: true})

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
          authenticated={this.props.authenticated}
          handleSelected={this.handleSelected}
          selected={this.state.selected}
          isSelected={this.state.isSelected}
        />} />
         <Route
           path='/volunteers'
           render={() => <Volunteers />} />
         <Route
           path='/contact-us'
           render={() => <ContactUs />} />
        <Route
          path='/add-pet'
          render={() => <AddPet
          authenticated={this.props.authenticated}
          />} />
        <Route
          path='/update-pet'
          render={() => <UpdatePet
          authenticated={this.props.authenticated}
          selected={this.state.selected}
          isSelected={this.state.isSelected}
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
