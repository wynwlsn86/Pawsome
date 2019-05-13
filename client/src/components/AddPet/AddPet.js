import React, { Component } from 'react';
import axios from 'axios';
import { addPet } from '../../services/petsApi'

class AddPet extends Component {
    constructor () {
        super();
        this.state = {
            name: null,
            age: null,
            species: null,
            color: null,
            gender: null,
            breed: null,
            medical: null,
            bio: null,
            image: null,
            createdPet: false
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.buind(this);
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let newPet = {
            name: this.state.name,
            age: this.state.age,
            species: this.state.species,
            color: this.state.color,
            gender: this.state.gender,
            breed: this.state.breed,
            medical: this.state.breed,
            bio: this.state.bio,
            image: this.state.image
        }
        await addPet(newPet);
        this.setState({createdPet: true});
    }


    handleChange = (e) => {
        const el = e.target;
        const name = el.name;
        const value = el.value;
        console.log(name, value)
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type='input' 
                        placeholder='Pet Name'
                        id='name'
                        name='name'
                        onChange={this.handleChange}
                    />
                    <label>Age:</label>
                    <input 
                        type='input' 
                        placeholder='Age'
                        id='age'
                        name='age'
                        onChange={this.handleChange}
                    />
                    <label>Species:</label>
                    <input 
                        type='input' 
                        placeholder='Species'
                        id='species'
                        name='species'
                        onChange={this.handleChange}
                    />
                    <label>Color:</label>
                    <input 
                        type='input' 
                        placeholder='Color'
                        id='color'
                        name='color' 
                        onChange={this.handleChange}
                    />
                    <label>Gender:</label>
                    <input 
                        type='input' 
                        placeholder='Gender'
                        id='gender'
                        name='gender'
                        onChange={this.handleChange}
                    />
                    <label>Breed:</label>
                    <input 
                        type='input' 
                        placeholder='Breed'
                        id='breed'
                        name='breed'
                        onChange={this.handleChange}
                    />
                    <label>Medical:</label>
                    <input 
                        type='input' 
                        placeholder='Fixed'
                        id='medical'
                        name='medical'
                        onChange={this.handleChange}
                    />
                    <label>Bio:</label>
                    <input 
                        type='input' 
                        placeholder='Biography'
                        id='biography'
                        name='biography'
                        onChange={this.handleChange}
                    />
                    <label>Image:</label>
                    <input 
                        type='input' 
                        placeholder='Image File'
                        id='image'
                        name='image'
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPet;