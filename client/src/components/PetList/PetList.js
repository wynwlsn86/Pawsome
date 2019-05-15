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
            images: [Flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty],
            selected: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const petSelected = parseInt(e.currentTarget.value)
        this.setState({selected: petSelected});
        console.log(this.state)

    }


    render() {
        console.log(this.props)
       const petList = this.props.allPets.map((pet, i) => {
           return (
               //give these divs a border and either an onHover or a cursor pointer
                <div className="List-item">
                    <h1>{pet.name}</h1>
                    <img
                    src={this.state.images[i]}
                    alt='test' />
                    <button onClick={this.handleClick} value={pet.id}>Select</button>
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
