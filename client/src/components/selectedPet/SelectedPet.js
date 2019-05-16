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
            <div>
              <div className="Column">
                <button onClick={this.props.onDelete}>Delete</button>
                <Link to='/update-pet'><button>Update</button></Link>
              </div>
                <div className="Selected-pets">
                    <h1>{this.props.selected.name}</h1>

                    {/* <Route
                    path='/update-pet'
                    render={() => <UpdatePet
                    // authenticated={this.props.authenticated}
                    />} /> */}
                    <img
                        src={this.props.selected.image}
                        alt='test' />
                    <ul>
                        <li>Age: {this.props.selected.age}</li>
                        <li>Bio: {this.props.selected.bio}</li>
                        <li>Breed: {this.props.selected.breed}</li>
                        <li>Color: {this.props.selected.color}</li>
                    </ul>
                </div>
              </div>

            )
        }
        else if(this.props.isSelected){
            return(
                <div className="Selected-pets">
                <div>
                    <h1>{this.props.selected.name}</h1>
                    <img
                    src={this.props.selected.image}
                    alt='test' />
                </div>
                    <ul>
                        <li>Age: {this.props.selected.age}</li>
                        <li>Breed: {this.props.selected.breed}</li>
                        <li>Color: {this.props.selected.color}</li>
                        <li>Bio: {this.props.selected.bio}</li>
                        <p>Interested in adopting {this.props.selected.name}? Make an adoption inquiry by clicking on the button below.</p>
                        <Link to='/adopt-form'><button> Inquiry </button></Link>
                    </ul>
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
