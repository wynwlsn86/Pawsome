import React, { Component } from 'react';
import Morty from '../../assets/morty.jpeg'
import Jane from '../../assets/jane.jpeg'
import Flopsy_peter from '../../assets/flopsy_peter.jpeg'
import Putzie from '../../assets/putzie.jpeg'
import Rizzo from '../../assets/rizzo.jpeg'
import Sammi from '../../assets/sami.jpeg'
import noCatImage from '../../assets/noCatImage.jpeg';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


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
                    </ul>
                      <Link to='/contact-us'><button>Adoption Inquiry</button></Link>
                </div>
            )
        }

        return (
            <div className="Wrapper">
                <div className="Selected-pets">
                <h1>SELECT A PET</h1>
                <img src={noCatImage} alt='' />
                <p>Scroll through the adoptable pets and click select to learn more about these rescued animals and inquire about adoption.
                </p>
                </div>

            </div>
        );
    }
}

export default SelectedPet;
