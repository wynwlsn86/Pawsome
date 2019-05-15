import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import Flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
import SelectedPet from '../selectedPet/SelectedPet';
class PetList extends Component {
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
            images: [flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty]
=======
            images: [Flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty],
            selected: ''
>>>>>>> 916bff28af52ed48f8b8e23af723b5891e5c5a8f
        }
    }


    render() {
        // console.log(this.props.onHandleClicked)
       const petList = this.props.allPets.map((pet, i) => {
           return (
               //give these divs a border and either an onHover or a cursor pointer
                <div className="List-item">
                    <h1>{pet.name}</h1>
                    <img
                    src={this.state.images[i]}
                    alt='test' />
                    <button onClick={this.props.handleClicked} value={pet.id}>Select</button>
                </div>
            )
        });


        return (
<<<<<<< HEAD
            <div>
                <SelectedPet pets={this.props.allPets} selectedPet={this.props.leSelected} />
=======
            <div className="Pet-list">
>>>>>>> 916bff28af52ed48f8b8e23af723b5891e5c5a8f
                {petList}
            </div>
        );
    }
}

export default PetList;
