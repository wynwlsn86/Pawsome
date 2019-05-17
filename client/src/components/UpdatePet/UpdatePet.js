import React, { Component } from 'react';
import { putPet } from '../../services/petsApi';
import {Redirect} from 'react-router-dom';

class UpdatePet extends Component {
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
            updatedPet: false
        }
    }
    handleFill = () => {
        const name = this.props.selected.name;
        const age = this.props.selected.age;
        const species = this.props.selected.species;
        const color = this.props.selected.color;
        const gender = this.props.selected.gender;
        const breed = this.props.selected.breed;
        const medical = this.props.selected.medical;
        const bio = this.props.selected.bio;
        const image = this.props.selected.image;
        this.setState({name, age, species, color, gender, breed, medical, bio, image})
    }

    handleChange = (e) => {
        const element = e.target;
        const name = element.name;
        const value = element.value;
        this.setState({[name]: value});
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
        let id = Number(this.props.selected.id)
        await putPet(id, newPet);
        this.setState({updatedPet: true});

    }

    componentDidMount = () => {
        this.handleFill();
    }
    render() {
        if(this.state.updatedPet){
            return <Redirect to='/' />
        }
        return (
          <div className="Main">
            <div className="Wrapper">
              <h1>Update Pet</h1>
                <form className="Volunteer-form" onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input
                        type='input'
                        placeholder='Pet Name'
                        id='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>Age:</label>
                    <input
                        type='input'
                        placeholder='Age'
                        id='age'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <label>Species:</label>
                    <input
                        type='input'
                        placeholder='Species'
                        id='species'
                        name='species'
                        value={this.state.species}
                        onChange={this.handleChange}
                    />
                    <label>Color:</label>
                    <input
                        type='input'
                        placeholder='Color'
                        id='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <label>Gender:</label>
                    <input
                        type='input'
                        placeholder='Gender'
                        id='gender'
                        name='gender'
                        value={this.state.gender}
                        onChange={this.handleChange}
                    />
                    <label>Breed:</label>
                    <input
                        type='input'
                        placeholder='Breed'
                        id='breed'
                        name='breed'
                        value={this.state.breed}
                        onChange={this.handleChange}
                    />
                    <label>Medical:</label>
                    <input
                        type='input'
                        placeholder='Fixed'
                        id='medical'
                        name='medical'
                        value={this.state.medical}
                        onChange={this.handleChange}
                    />
                    <label>Bio:</label>
                    <input
                        type='input'
                        placeholder='Biography'
                        id='biography'
                        name='biography'
                        value={this.state.bio}
                        onChange={this.handleChange}
                    />
                    <label>Image:</label>
                    <input
                        type='input'
                        placeholder='Image File'
                        id='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
          </div>
        );
    }
}

export default UpdatePet;
