import React, { Component } from 'react';

class PetList extends Component {

    render() {
       const petList = this.props.allPets.map((pet) => {
           return (
                <div>
                    <h1>{pet.name}</h1>
                    <img src={pet.image} alt='' />
                </div>
            )
        });

        return (
            <div>
                PetList
                {petList}
            </div>
        );
    }
}

export default PetList;