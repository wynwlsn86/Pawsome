import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
import SelectedPet from '../selectedPet/SelectedPet';
class PetList extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty]
        }
    }


    render() {
        // console.log(this.props.onHandleClicked)
       const petList = this.props.allPets.map((pet, i) => {
           return (
               //give these divs a border and either an onHover or a cursor pointer
                <div>
                    <h1>{pet.name}</h1>
                    <img 
                    src={this.state.images[i]}
                    alt='test' />
                    <button onClick={this.props.handleClicked} value={pet.id}>Select</button>
                </div>
            )
        });


        return (
            <div>
                <SelectedPet pets={this.props.allPets} selectedPet={this.props.leSelected} />
                {petList}
            </div>
        );
    }
}

export default PetList;