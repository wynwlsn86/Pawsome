import React from 'react';
import AddPet from '../AddPet/AddPet';
import Home from '../Home/Home';
import PetList from '../PetList/PetList'
import { Route} from 'react-router-dom'

<<<<<<< HEAD
const Main = () => (
<div>
  <div class="Main">
     <img src="https://via.placeholder.com/250" alt="pet photos" ALIGN="left"/>
        <div>
          <h1>
            HEADER
          </h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
   </div>
</div>
=======
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
>>>>>>> f57a5e98515692811fda24ea9e98d933a62c5cdc
);

export default Main;
