import React, { Component } from 'react';

class AddPet extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type='input' placeholder='Pet Name'></input>
                    <label>Age:</label>
                    <input type='input' placeholder='Age'></input>
                    <label>Species:</label>
                    <input type='input' placeholder='Species'></input>
                    <label>Color:</label>
                    <input type='input' placeholder='Color'></input>
                    <label>Gender:</label>
                    <input type='input' placeholder='Gender'></input>
                    <label>Breed:</label>
                    <input type='input' placeholder='Gender'></input>
                    <label>Birthday:</label>
                    <input type='input' placeholder='Gender'></input>
                    <label>Age:</label>
                    <input type='input' placeholder='Age'></input>
                    <label>Fixed:</label>
                    <input type='input' placeholder='Fixed'></input>
                    <label>Bio:</label>
                    <input type='input' placeholder='Biography'></input>
                    <label>Image:</label>
                    <input type='input' placeholder='Image File'></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPet;