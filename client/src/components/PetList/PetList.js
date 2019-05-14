import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'

class PetList extends Component {

    render() {
       const petList = this.props.allPets.map((pet) => {
           return (
                <div>
                    <h1>{pet.name}</h1>
                    <img src={Morty} alt='test' />
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