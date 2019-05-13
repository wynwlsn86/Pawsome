import React, { Component } from 'react';
import { getAllPets } from '../../services/petsApi';
import SelectedPet from '../selectedPet/SelectedPet';
import PetList from '../PetList/PetList';


class AllPets extends Component {
    constructor () {
        super();
        this.state = {
            allPets: []
        }
    }



    fetchAllPets = async () => {
       const allPets =  await getAllPets();
        console.log(allPets);
        this.setState({allPets});
    }

    componentDidMount() {
        this.fetchAllPets();
    }
    


    render() {
        return (
            <div>
                <SelectedPet 
                />
                <PetList 
                allPets={this.state.allPets}
                />
            </div>
        );
    }
}

export default AllPets;