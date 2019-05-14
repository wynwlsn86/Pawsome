import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
class PetList extends Component {
    constructor(){
        super();
        this.state = {
            images: [flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty]
        }
    }


    render() {
       const petList = this.props.allPets.map((pet, i) => {
           return (
               //give these divs a border and either an onHover or a cursor pointer
                <div>
                    <h1>{pet.name}</h1>
                    <img 
                    src={this.state.images[i]}
                    alt='test' />
                </div>
            )
        });

        return (
            <div>
                {petList}
            </div>
        );
    }
}

export default PetList;