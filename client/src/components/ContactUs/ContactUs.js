import React, { Component } from 'react';
import harvey from '../../assets/harvey.png'

import {addVolunteer} from '../../services/volunteersApi'


class NewContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: '',
      email: '',
      message: '',
      formtoggle: false
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  async submitForm() {
    const data = this.state
    try {
      await addVolunteer(data)
      alert('Message was successfully submitted')
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
      message: ''
    })
  }

  handleTextInput(event) {
    const fieldName = event.target.name
    //write in the field to view the changes in console, and display the name of the input
    const value = event.target.value
    this.setState(state => {
      return { [fieldName]: value }
    })
  }

  handleSubmitForm(event) {
    event.preventDefault()
    this.submitForm()
  }

  render() {
    return (
    <div>
    <div className="Main">

      <div className='Volunteers'>

        <img className="Form-photo-fill" src={harvey} alt='' />

<div className='Wrapper'>
<h1>Contact Us</h1>
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

          <div className='Message-field'>
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
    </div>
    </div>
    )
  }

}

export default NewContactForm;
