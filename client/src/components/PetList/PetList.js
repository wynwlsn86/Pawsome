import React, { Component } from 'react';

class PetList extends Component {
    createList = () => {
        this.props.allPets.map(pet => {
            return console.log('petsssss');
        })
}
    render() {


        return (
            <div>
                {/* {this.createList} */}
            </div>
        );
    }
}

export default PetList;