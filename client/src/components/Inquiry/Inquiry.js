import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import { addAdopter } from '../../services/adoptersApi';

class Inquiry extends Component {
    constructor(props){
        super(props)
        this.state ={
            first: null,
            last: null,
            dob:null,
            license: null,
            rent_own: null,
            num_pets: null,
            num_children: null,
            allergies: null,
            vet:null,
            phone:null,
            email: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            house_size: null,
            animal_id: 10000,
            updatedAdopter: false
        }
    }

    handleChange = (e) => {
        const element = e.target;
        const leId = this.props.selected.id
        const name = element.name;
        const value = element.value;
        this.setState({
            animal_id: leId,
            [name]: value
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        if(!this.state.first || !this.state.last || !this.state.dob || !this.state.num_children || !this.state.phone || !this.state.address || !this.state.city || !this.state.state || !this.state.zip){
            console.log(this.state)
            alert('Please fill out all fields. All information is required');
        }
        else{
            let newAdopter = {
                first: this.state.first,
                last: this.state.last,
                dob: this.state.dob,
                license: this.state.license,
                rent_own: this.state.rent_own,
                num_pets: this.state.num_pets,
                num_children: this.state.num_children,
                allergies: this.state.allergies,
                vet: this.state.vet,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                state:this.state.state,
                zip: this.state.zip,
                house_size: this.state.house_size,
                animal_id: this.state.animal_id
            }
            await addAdopter(newAdopter);
            this.setState({updatedAdopter: true});
            alert('Application Successfully Sent');
        }
    }


    render() {
        if(this.state.updatedAdopter){
            return <Redirect to='/' />
        }
        return (
              <div className="Main">
                  <h1>Adoption Form</h1>
                    <form className="Adoption-form" onSubmit={this.handleSubmit}>
                        <label> First Name: </label>
                        <input
                            type='input'
                            placeholder='First Name'
                            id='first'
                            name='first'
                            value={this.state.first}
                            onChange={this.handleChange}
                        />
                        <label> Last Name: </label>
                        <input
                            type='input'
                            placeholder='Last Name'
                            id='last'
                            name='last'
                            value={this.state.last}
                            onChange={this.handleChange}
                        />
                        <label>DOB:</label>
                        <input
                            type='input'
                            placeholder='d.o.b'
                            id='dob'
                            name='dob'
                            value={this.state.dob}
                            onChange={this.handleChange}
                        />
                        <div className="Wrapper">
                        <label>License:</label>
                        <input
                            type='input'
                            placeholder='license number'
                            id='license'
                            name='license'
                            value={this.state.license}
                            onChange={this.handleChange}
                        />
                        <label>Rent or Own?:</label>
                        <input
                            type='input'
                            placeholder='Do you Rent or Own?'
                            id='rent_own'
                            name='rent_own'
                            value={this.state.rent_own}
                            onChange={this.handleChange}
                        />
                        <label>Number of Pets:</label>
                        <input
                            type='input'
                            placeholder='Number of pets'
                            id='num_pets'
                            name='num_pets'
                            value={this.state.num_pets}
                            onChange={this.handleChange}
                        />
                        </div>
                        <label>Number of Children:</label>
                        <input
                            type='input'
                            placeholder='How many Children do you have?'
                            id='num_children'
                            name='num_children'
                            value={this.state.num_children}
                            onChange={this.handleChange}
                        />
                        <label>Allergies:</label>
                        <input
                            type='input'
                            placeholder='Any Allergies?'
                            id='allergies'
                            name='allergies'
                            value={this.state.allergies}
                            onChange={this.handleChange}
                        />
                        <label>Vet:</label>
                        <input
                            type='input'
                            placeholder='vet information here'
                            id='vet'
                            name='vet'
                            value={this.state.vet}
                            onChange={this.handleChange}
                        />
                        <label>Phone:</label>
                        <input
                            type='input'
                            placeholder='phone'
                            id='phone'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                        <label>Email:</label>
                        <input
                            type='input'
                            placeholder='email'
                            id='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label>Address:</label>
                        <input
                            type='input'
                            placeholder='address'
                            id='address'
                            name='address'
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                        <label>City:</label>
                        <input
                            type='input'
                            placeholder='city'
                            id='city'
                            name='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <label>State:</label>
                        <input
                            type='input'
                            placeholder='state'
                            id='state'
                            name='state'
                            value={this.state.state}
                            onChange={this.handleChange}
                        />
                        <label>Zip:</label>
                        <input
                            type='input'
                            placeholder='zip'
                            id='zip'
                            name='zip'
                            value={this.state.zip}
                            onChange={this.handleChange}
                        />
                        <label>House Size (sq foot):</label>
                        <input
                            type='input'
                            placeholder='house_size'
                            id='house_size'
                            name='house_size'
                            value={this.state.house_size}
                            onChange={this.handleChange}
                        />


                        <button onClick={this.handleSubmit}>Submit</button>
                    </form>

                  </div>
            );
        }
    }

export default Inquiry;
