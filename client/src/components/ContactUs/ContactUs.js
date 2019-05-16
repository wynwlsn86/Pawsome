import React, { Component } from 'react';
import biggie from '../../assets/biggie.jpg'

import {addVolunteer} from '../../services/volunteersApi'


class NewContactForm extends Component {
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
      <h1>Contact Us</h1>
      <div className='Volunteers'>
        <img className="Form-photo-fill" src={biggie} alt='' />

        <form className="Volunteer-form" onSubmit={this.handleSubmitForm}>
          <div>
            <label>Name:</label>
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
            <label>Message:</label>
            <input
              type="text"
              name="address"
              onChange={this.handleTextInput}
              value={this.state.address}
            />
          </div>

          <button>Submit</button>
        </form>

      </div>
    </div>
    )
  }

}

export default NewContactForm;
