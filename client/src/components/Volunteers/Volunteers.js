import React, { Component } from 'react';
import biggie from '../../assets/biggie.jpg'
import { Redirect } from 'react-router-dom'

import {addVolunteer} from '../../services/volunteersApi'


class NewVolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      formtoggle: false
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  async submitForm() {
    const data = this.state
    if(!this.state.name || !this.state.phone || !this.state.address){
      alert('Name, Phone Number, and Address are Required')
    }
    else{
      try {
        await addVolunteer(data)
        alert('Application was successfully created');
        this.setState({formtoggle: true})
      } catch(error) {
        console.log(error)
        alert('There was an error submitting')
      }
    }

  }

  clearForm() {
    this.setState({
      name: "",
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: null
    })
  }

  handleTextInput(event) {
    const fieldName = event.target.name
    console.log(fieldName);
    //write in the field to view the changes in console, and display the name of the input
    const value = event.target.value
    console.log( `${fieldName}, ${value}`)

    this.setState(state => {
      // console.log(event)

      return { [fieldName]: value }
    })
  }

  handleSubmitForm(event) {
    event.preventDefault()
    this.submitForm()
  }

  render() {
    if(this.state.formtoggle){
      return <Redirect to='/' />
    }
    return (
  <div>

    <div className="Main">

      <div className='Volunteers'>
        <img src={biggie} alt='' />
        <div className="Wrapper">
        <h1>Volunteer Application</h1>
        <form className="Volunteer-form" onSubmit={this.handleSubmitForm}>
          <div>
            <label>Applicant Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleTextInput}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              onChange={this.handleTextInput}
              value={this.state.phone}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.email}
            />
          </div>

          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              onChange={this.handleTextInput}
              value={this.state.address}
            />
          </div>

          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              onChange={this.handleTextInput}
              value={this.state.city}
            />
          </div>

          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              onChange={this.handleTextInput}
              value={this.state.state}
            />
          </div>

          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              name="zip Code"
              onChange={this.handleTextInput}
              value={this.state.zip}
            />
          </div>

          <div>
            <label>Number of Pets:</label>
            <input
              type="text"
              name="num_of_pets"
              onChange={this.handleTextInput}
              value={this.state.num_of_pets}
            />
          </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <button>Submit Volunteer Application</button>
        </form>

      </div>
    </div>
  </div>
  </div>
    )
  }

}

export default NewVolunteerForm;
