import React, { Component } from 'react';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';
import axios from 'axios'


class AllPets extends Component {

    constructor(){
        super();
        this.state = {
            selected: {},
            isSelected: false,
            isDeleted: false
        }
    }

    handleDelete = async (e, id) => { 
        const deletedPet = this.state.selected.id
        await axios.delete(`http://localhost:5000/pets/${deletedPet}`)
        this.setState({isDeleted: true})
        alert('pet has been deleted')
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
                    selected={this.props.selected}
                    handleSelected={this.props.handleSelected}
                    onDelete={this.handleDelete}
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
