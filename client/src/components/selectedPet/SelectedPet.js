import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import Flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
import noCatImage from '../../assets/noCatImage.jpeg';
import axios from 'axios'
import { Link } from 'react-router-dom'

class SelectedPet extends Component {
    constructor(props){
        super(props);
        this.state={
            grabbedPet: '',
            petImage: '',
            petDesc: '',
            images: [Flopsy_peter, Jane, Sammi, Rizzo, Putzie, Morty]
        }
    }

    render() {
        console.log(this.props.selected.id)
        if(this.props.authenticated && this.props.isSelected){
            return(
                <div className="Selected-pets">
                    <h1>{this.props.selected.name}</h1>
                    <button onClick={this.props.onDelete}>Delete</button>
                    <Link to='/update-pet'><button>Update</button></Link>
                    {/* <Route
                    path='/update-pet'
                    render={() => <UpdatePet
                    // authenticated={this.props.authenticated}
                    />} /> */}
                    <img
                        src={noCatImage}
                        alt='test' />
                        age, bio breed color
                    <ul>
                        <li>Age: {this.props.selected.age}</li>
                        <li>Bio: {this.props.selected.bio}</li>
                        <li>Breed: {this.props.selected.breed}</li>
                        <li>Color: {this.props.selected.color}</li>
                        
                    </ul>
                </div>
            )
        }
        else if(this.props.isSelected){
            return(
                <div className="Selected-pets">
                <div>
                    <h1>{this.props.selected.name}</h1>
                    <img
                    src={noCatImage}
                    alt='test' />
                </div>
                    <ul>
                        <li>Age: {this.props.selected.age}</li>
                        <li>Breed: {this.props.selected.breed}</li>
                        <li>Color: {this.props.selected.color}</li>
                        <li>Bio: {this.props.selected.bio}</li>
                        <Link to='/adopt-form'><button> Inquiry </button></Link>
                    </ul>
                </div>
            )
        }
    
        return (
            <div className="Center">

                <div className="Selected-pets">
                <h1>SELECT A PET</h1>
                <img src={noCatImage} alt='' />

                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        );
    }
}

export default SelectedPet;
