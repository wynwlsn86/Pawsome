import React, { Component } from 'react';
import { addPet } from '../../services/petsApi';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

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
            image: '',
            createdPet: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // bind it, don't buind it.
    }

    handleSubmit = (e) => {


        // this.handleSubmit = this.handleSubmit.buind(this);
    }

    //onchange set image to state out of base code
    handleImageConvert = (e) => {
        e.preventDefault();
            // let reader = new FileReader();
            let image = e.target.files[0];
            this.setState({
                image
            })

    }


    handleUpload = async (e) => {
        e.preventDefault();
        const formData = await new FormData();
        await formData.append('image', this.state.image)
        await Axios.post('http://localhost:5000/image/image-upload', formData, {
            headers: {
                'Content-Type': 'image/jpeg'
            }   
        })
        .then(response => {
            const image = response.data.imageUrl;
            this.setState({image})
            alert('Image Uploaded')
        })
        .catch(error => console.log(error.message))
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.species || !this.state.gender || !this.state.age){
            alert('Name, Species, Age, and Gender are required fileds')
        }
        else {
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
    }


    handleChange = (e) => {
        const el = e.target;
        const name = el.name;
        const value = el.value;
        this.setState({[name]: value});
    }

    render() {
        if(this.props.authenticated && this.state.createdPet){
            return <Redirect to='/' />
        }
        else if(!this.props.authenticated){
            return <Redirect to='/login' />
        }
        return (
            <div className="Main-add">
              <h1>Add a New Pet</h1>
                <form className="Volunteer-form" onSubmit={this.handleSubmit}>
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
                        type='file'
                        placeholder='Image File'
                        id='image'
                        name='image'
                        onChange={e => this.handleImageConvert(e)}
                    />
                    <button onClick={this.handleUpload}>UPLOAD FILE</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPet;
