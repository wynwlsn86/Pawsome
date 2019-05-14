import React, { Component } from 'react';
import  {addVolunteer}  from '../../services/volunteersApi'; //need this file to be created, and for the file to contain a create application function

class NewVolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }

    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  async submitForm() {
    const {} = this.state
    try {
      await addVolunteer() 
      this.clearForm()

      alert('Application was successfully created')
    } catch(error) {
      console.log(error)
      alert('There was an error submitting')
    }
  }

  clearForm() {
    this.setState({
      name: "",
    })
  }

  handleTextInput(event) {
    const fieldName = event.target.name
    console.log(fieldName);
    //write in the field to view the changes in console, and display the name of the input
    const value = event.target.value
    // console.log('data:', `${fieldName}, ${value}`)

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
      <div>
        <h2>New Volunteer Form</h2>

        <form className="volunteer-form" onSubmit={this.handleSubmitForm}>
          <div>
            <label>Applicant Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleTextInput}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              onChange={this.handleTextInput}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.name}
            />
          </div>

          <div>
            <label>Address 1</label>
            <input
              type="text"
              name="Address 1"
              onChange={this.handleTextInput}
              value={this.state.trainType}
            />
          </div>

          <div>
            <label>Address 2</label>
            <input
              type="text"
              name="Address 2"
              onChange={this.handleTextInput}
              value={this.state.trainType}
            />
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              name="City"
              onChange={this.handleTextInput}
              value={this.state.trainType}
            />
          </div>

          <div>
            <label>State</label>
            <input
              type="text"
              name="State"
              onChange={this.handleTextInput}
              value={this.state.trainType}
            />
          </div>

          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="Zip Code"
              onChange={this.handleTextInput}
              value={this.state.trainType}
            />
          </div>

          <button>Submit Volunteer Application</button>
        </form>

      </div>
    )
  }

}

export default NewVolunteerForm;
