import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';


class AllPets extends Component {

    render() {
        return (
            <div className="Find-a-pet">
                <SelectedPet 
                    className="Selected-pets"
                    selected={this.props.selected}
                    isSelected={this.props.isSelected}
                    authenticated={this.props.authenticated}
                />
                <PetList className="Pet-list"
                handleSelected={this.props.handleSelected}
                allPets={this.props.allPets}
                />
            </div>
        );
    }
}

export default AllPets;
