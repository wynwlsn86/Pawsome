import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';
import axios from 'axios'


class AllPets extends Component {
    constructor(){
        super();
        this.state = {
            selected: {},
            isSelected: false
        }
    }

    handleDelete = async (e, id) => { 
        e.preventDefault();
        const deletedPet = this.state.selected.id
        await axios.delete(`http://localhost:5000/pets/${deletedPet}`)
    }

    handleClick = (e) => {
        e.preventDefault();
        const selected = this.props.allPets[e.target.value];
        console.log(selected);
        console.log(e.target.value, 'value')
        console.log(this.props.allPets)
        this.setState({selected});
        console.log(this.state)
        this.setState({isSelected: true})

    }

    render() {
        return (
            <div className="Find-a-pet">
                <SelectedPet 
                    className="Selected-pets"
                    selected={this.state.selected}
                    isSelected={this.state.isSelected}
                    authenticated={this.props.authenticated}
                />
                <PetList className="Pet-list"
                handleClick={this.handleClick}
                allPets={this.props.allPets}
                selected={this.state.selected}
                />
            </div>
        );
    }
}

export default AllPets;
