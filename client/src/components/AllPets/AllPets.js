import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';


class AllPets extends Component {
    constructor(){
        super();
        this.state={
            selected: '',
            petSelected: false
        }
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(e){
        e.preventDefault();
        console.log('handle click in pets ****')
        const chosenPet = parseInt(e.target.value)
        this.setState({
            selected: chosenPet,
            petSelected: !petSelected
        });
        console.log(this.state)
    }

    render() {
        const {allPets} = this.props
        return (
<<<<<<< HEAD
            <div>
                <SelectedPet 
                selectId={this.state.selected}
                />
                <PetList 
                handleClicked={this.handleClicked}
                leSelected={this.state.selected}
                allPets={allPets}
=======
            <div className="Find-a-pet">
                <SelectedPet className="Selected-pets"
                />
                <PetList className="Pet-list"
                allPets={this.props.allPets}
>>>>>>> 916bff28af52ed48f8b8e23af723b5891e5c5a8f
                />
            </div>
        );
    }
}

export default AllPets;
