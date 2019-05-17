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
                    handleSelected={this.props.handleSelected}
                    onDelete={this.props.onDelete}
                    isSelected={this.props.isSelected}
                    authenticated={this.props.authenticated}
                />
                <PetList className="Pet-list"
                handleSelected={this.props.handleSelected}
                onHandleClick={this.props.handleClick}
                allPets={this.props.allPets}
                selected={this.props.selected}
                />
            </div>
        );
    }
}

export default AllPets;
