import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';


class AllPets extends Component {


    render() {
        return (
            <div className="Find-a-pet" style="background-color: blue">
                <SelectedPet className="Selected-pets"
                />
                <PetList className="Pet-list"
                allPets={this.state.allPets}
                />
            </div>
        );
    }
}

export default AllPets;
