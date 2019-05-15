import React, { Component } from 'react';
import ollyrhae from '../../assets/ollyrhae.jpg'

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
    try {
      await addVolunteer(data)
      alert('Application was successfully created')
    } catch(error) {
      console.log(error)
      alert('There was an error submitting')
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
    return (
    <div className="Wrapper">
      <div className='Volunteers'>
        <img className="Form-photo-fill" src={ollyrhae} alt='' />

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

          <button>Submit Volunteer Application</button>
        </form>

      </div>
    </div>
    )
  }

}

export default NewVolunteerForm;
