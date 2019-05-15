import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';


class AllPets extends Component {


    render() {
        return (
            <div>
                <SelectedPet 
                />
                <PetList 
                allPets={this.props.allPets}
                />
            </div>
        );
    }
}

export default AllPets;