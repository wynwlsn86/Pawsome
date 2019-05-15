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
            <div>
                <SelectedPet 
                selectId={this.state.selected}
                />
                <PetList 
                handleClicked={this.handleClicked}
                leSelected={this.state.selected}
                allPets={allPets}
                />
            </div>
        );
    }
}

export default AllPets;