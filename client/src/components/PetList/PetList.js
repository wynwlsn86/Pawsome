import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import Flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
class PetList extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [Flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty],

        }
    }


    render() {
       const petList = this.props.allPets.map((pet, i) => {
           return (
               //give these divs a border and either an onHover or a cursor pointer
                <div 
                className="List-item"
                id={i}>
                    <h1>{pet.name}</h1>
                    <img
                    src={pet.image}
                    alt='test' />
                    <button onClick={this.props.handleSelected} value={pet.id -1}>Select</button>
                </div>
            )
        });


        return (
            <div className="Pet-list">
                {petList}
            </div>
        );
    }
}

export default PetList;
