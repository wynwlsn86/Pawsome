import React, { Component } from 'react';

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
            image: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.buind(this);
    }

    handleSubmit = (e) => {

            
    }
    handleChange = (e) => {

    }

    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input 
                        type='input' 
                        placeholder='Pet Name'
                        id='name'
                        name='name'
                    />
                    <label>Age:</label>
                    <input 
                        type='input' 
                        placeholder='Age'
                        id='age'
                        name='age'
                    />
                    <label>Species:</label>
                    <input 
                        type='input' 
                        placeholder='Species'
                        id='species'
                        name='species'
                    />
                    <label>Color:</label>
                    <input 
                        type='input' 
                        placeholder='Color'
                        id='color'
                        name='color' 
                    />
                    <label>Gender:</label>
                    <input 
                        type='input' 
                        placeholder='Gender'
                        id='gender'
                        name='gender'
                    />
                    <label>Breed:</label>
                    <input 
                        type='input' 
                        placeholder='Breed'
                        id='breed'
                        name='breed'
                    />
                    <label>Medical:</label>
                    <input 
                        type='input' 
                        placeholder='Fixed'
                        id='medical'
                        name='medical'
                    />
                    <label>Bio:</label>
                    <input 
                        type='input' 
                        placeholder='Biography'
                        id='biography'
                        name='biography'
                    />
                    <label>Image:</label>
                    <input 
                        type='input' 
                        placeholder='Image File'
                        id='image'
                        name='image'
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPet;